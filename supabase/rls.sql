create table if not exists public.fitness_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null default '{}',
  updated_at timestamptz not null default now()
);

alter table public.fitness_state enable row level security;
grant select, insert, update, delete on public.fitness_state to authenticated;

drop policy if exists "Users can read their own state" on public.fitness_state;
drop policy if exists "Users can insert their own state" on public.fitness_state;
drop policy if exists "Users can update their own state" on public.fitness_state;
drop policy if exists "Users can delete their own state" on public.fitness_state;

create policy "Users can read their own state"
  on public.fitness_state for select
  using (auth.uid() = user_id);

create policy "Users can insert their own state"
  on public.fitness_state for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own state"
  on public.fitness_state for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own state"
  on public.fitness_state for delete
  using (auth.uid() = user_id);

create index if not exists fitness_state_updated_at_idx
  on public.fitness_state (updated_at desc);
