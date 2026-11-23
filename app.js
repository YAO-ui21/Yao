

/* =====================================================
   PARTICLES
===================================================== */

(function(){

    const container =
        document.getElementById("particles");

    for(let i=0;i<35;i++){

        const p =
            document.createElement("div");

        p.className="particle";

        p.style.left =
            Math.random()*100+"%";

        p.style.animationDuration =
            (10+Math.random()*20)+"s";

        p.style.animationDelay =
            (-Math.random()*20)+"s";

        container.appendChild(p);
    }

})();


/* =====================================================
   EXERCISE DATABASE
===================================================== */

const EXERCISES = [

/* CHEST */

{
    id:"bench",
    name:"Barbell Bench Press",
    primary:"Chest",
    secondary:["Triceps","Front Delts"],
    scheme:"4 × 6",
    tier:"S",
    description:"Heavy compound press for overall chest strength."
},

{
    id:"incline-bench",
    name:"Incline Bench Press",
    primary:"Chest",
    secondary:["Upper Chest","Front Delts","Triceps"],
    scheme:"4 × 8",
    tier:"S"
},

{
    id:"db-bench",
    name:"Dumbbell Bench Press",
    primary:"Chest",
    secondary:["Triceps","Front Delts"],
    scheme:"3 × 8-10",
    tier:"A"
},

{
    id:"incline-db",
    name:"Incline Dumbbell Press",
    primary:"Chest",
    secondary:["Upper Chest","Front Delts","Triceps"],
    scheme:"3 × 8-12",
    tier:"A"
},

{
    id:"chest-dip",
    name:"Chest Dips",
    primary:"Chest",
    secondary:["Triceps","Front Delts"],
    scheme:"3 × 8-12",
    tier:"A"
},

{
    id:"cable-fly",
    name:"Cable Fly",
    primary:"Chest",
    secondary:["Front Delts"],
    scheme:"3 × 12-15",
    tier:"B"
},

/* BACK */

{
    id:"deadlift",
    name:"Deadlift",
    primary:"Back",
    secondary:["Hamstrings","Glutes","Forearms","Core"],
    scheme:"3 × 5",
    tier:"S",
    description:"Full-body pulling movement focused on posterior-chain strength."
},

{
    id:"pullup",
    name:"Pull-Up",
    primary:"Back",
    secondary:["Lats","Biceps","Forearms","Core"],
    scheme:"4 × Max",
    tier:"S"
},

{
    id:"barbell-row",
    name:"Barbell Row",
    primary:"Back",
    secondary:["Lats","Upper Back","Biceps","Rear Delts"],
    scheme:"4 × 8",
    tier:"S"
},

{
    id:"lat-pulldown",
    name:"Lat Pulldown",
    primary:"Lats",
    secondary:["Back","Biceps"],
    scheme:"3 × 10",
    tier:"A"
},

{
    id:"seated-row",
    name:"Seated Cable Row",
    primary:"Back",
    secondary:["Upper Back","Lats","Biceps","Rear Delts"],
    scheme:"3 × 10-12",
    tier:"A"
},

{
    id:"chest-supported-row",
    name:"Chest Supported Row",
    primary:"Back",
    secondary:["Upper Back","Rear Delts","Biceps"],
    scheme:"3 × 8-12",
    tier:"A"
},

/* SHOULDERS */

{
    id:"ohp",
    name:"Overhead Press",
    primary:"Shoulders",
    secondary:["Front Delts","Triceps","Upper Chest","Core"],
    scheme:"4 × 6",
    tier:"S"
},

{
    id:"db-shoulder",
    name:"Dumbbell Shoulder Press",
    primary:"Shoulders",
    secondary:["Front Delts","Triceps"],
    scheme:"3 × 8-10",
    tier:"A"
},

{
    id:"lateral-raise",
    name:"Lateral Raise",
    primary:"Side Delts",
    secondary:["Shoulders"],
    scheme:"3 × 12-15",
    tier:"A"
},

{
    id:"rear-delt",
    name:"Rear Delt Fly",
    primary:"Rear Delts",
    secondary:["Shoulders","Upper Back"],
    scheme:"3 × 12-15",
    tier:"A"
},

{
    id:"face-pull",
    name:"Face Pull",
    primary:"Rear Delts",
    secondary:["Shoulders","Upper Back","Rotator Cuff"],
    scheme:"3 × 12-15",
    tier:"A"
},

/* BICEPS */

{
    id:"barbell-curl",
    name:"Barbell Curl",
    primary:"Biceps",
    secondary:["Forearms"],
    scheme:"3 × 8-12",
    tier:"S"
},

{
    id:"incline-curl",
    name:"Incline Dumbbell Curl",
    primary:"Biceps",
    secondary:["Forearms"],
    scheme:"3 × 10-12",
    tier:"A"
},

{
    id:"hammer-curl",
    name:"Hammer Curl",
    primary:"Brachialis",
    secondary:["Biceps","Forearms"],
    scheme:"3 × 10-12",
    tier:"A"
},

{
    id:"preacher-curl",
    name:"Preacher Curl",
    primary:"Biceps",
    secondary:["Forearms"],
    scheme:"3 × 10-12",
    tier:"A"
},

/* TRICEPS */

{
    id:"close-bench",
    name:"Close-Grip Bench Press",
    primary:"Triceps",
    secondary:["Chest","Front Delts"],
    scheme:"3 × 6-8",
    tier:"S"
},

{
    id:"skullcrusher",
    name:"Skull Crushers",
    primary:"Triceps",
    secondary:["Elbows"],
    scheme:"3 × 8-12",
    tier:"A"
},

{
    id:"pushdown",
    name:"Cable Pushdown",
    primary:"Triceps",
    secondary:[],
    scheme:"3 × 10-15",
    tier:"A"
},

{
    id:"overhead-tricep",
    name:"Overhead Triceps Extension",
    primary:"Triceps",
    secondary:[],
    scheme:"3 × 10-15",
    tier:"A"
},

/* LEGS */

{
    id:"squat",
    name:"Back Squat",
    primary:"Quads",
    secondary:["Glutes","Hamstrings","Core"],
    scheme:"4 × 5",
    tier:"S"
},

{
    id:"front-squat",
    name:"Front Squat",
    primary:"Quads",
    secondary:["Glutes","Core"],
    scheme:"3 × 6-8",
    tier:"S"
},

{
    id:"rdl",
    name:"Romanian Deadlift",
    primary:"Hamstrings",
    secondary:["Glutes","Back"],
    scheme:"3 × 8",
    tier:"S"
},

{
    id:"leg-press",
    name:"Leg Press",
    primary:"Quads",
    secondary:["Glutes","Hamstrings"],
    scheme:"3 × 10",
    tier:"A"
},

{
    id:"lunges",
    name:"Walking Lunges",
    primary:"Quads",
    secondary:["Glutes","Hamstrings"],
    scheme:"3 × 10 each",
    tier:"A"
},

{
    id:"leg-curl",
    name:"Leg Curl",
    primary:"Hamstrings",
    secondary:[],
    scheme:"3 × 10-15",
    tier:"A"
},

{
    id:"calf",
    name:"Standing Calf Raise",
    primary:"Calves",
    secondary:["Gastrocnemius"],
    scheme:"4 × 12-15",
    tier:"A"
},

/* CORE */

{
    id:"hanging-leg",
    name:"Hanging Leg Raise",
    primary:"Abs",
    secondary:["Core","Hip Flexors"],
    scheme:"3 × 10-15",
    tier:"A"
},

{
    id:"cable-crunch",
    name:"Cable Crunch",
    primary:"Abs",
    secondary:["Core"],
    scheme:"3 × 12-15",
    tier:"A"
},

{
    id:"plank",
    name:"Plank",
    primary:"Core",
    secondary:["Abs"],
    scheme:"3 × 30-60 sec",
    tier:"A"
},

{
    id:"ab-wheel",
    name:"Ab Wheel Rollout",
    primary:"Abs",
    secondary:["Core","Shoulders","Lats"],
    scheme:"3 × 8-12",
    tier:"S"
},

/* GLUTES */

{
    id:"hip-thrust",
    name:"Barbell Hip Thrust",
    primary:"Glutes",
    secondary:["Hamstrings"],
    scheme:"4 × 8-12",
    tier:"S"
},

{
    id:"bulgarian",
    name:"Bulgarian Split Squat",
    primary:"Glutes",
    secondary:["Quads","Hamstrings"],
    scheme:"3 × 8-10",
    tier:"S"
},

/* FOREARMS */

{
    id:"wrist-curl",
    name:"Wrist Curl",
    primary:"Forearms",
    secondary:[],
    scheme:"3 × 15",
    tier:"B"
},

{
    id:"farmer",
    name:"Farmer Carry",
    primary:"Forearms",
    secondary:["Grip","Traps","Core"],
    scheme:"3 × 30 sec",
    tier:"A"
}
,

/* TIKTOK / SOCIAL-FITNESS FAVORITES */

{
    id:'smith-machine-squat',
    name:'Smith Machine Squat',
    primary:'Quads',
    secondary:['Glutes','Core'],
    scheme:'3 × 8-12',
    tier:'S',
    trending:true
},
{
    id:'hack-squat',
    name:'Hack Squat',
    primary:'Quads',
    secondary:['Glutes'],
    scheme:'3 × 8-12',
    tier:'S',
    trending:true
},
{
    id:'leg-press-45',
    name:'45° Leg Press',
    primary:'Quads',
    secondary:['Glutes','Hamstrings'],
    scheme:'3 × 10-15',
    tier:'A',
    trending:true
},
{
    id:'leg-extension',
    name:'Leg Extension',
    primary:'Quads',
    secondary:[],
    scheme:'3 × 12-15',
    tier:'A',
    trending:true
},
{
    id:'seated-leg-curl',
    name:'Seated Leg Curl',
    primary:'Hamstrings',
    secondary:['Calves'],
    scheme:'3 × 10-15',
    tier:'S',
    trending:true
},
{
    id:'lying-leg-curl',
    name:'Lying Leg Curl',
    primary:'Hamstrings',
    secondary:['Calves'],
    scheme:'3 × 10-15',
    tier:'A',
    trending:true
},
{
    id:'cable-kickback',
    name:'Cable Glute Kickback',
    primary:'Glutes',
    secondary:['Hamstrings'],
    scheme:'3 × 12-15',
    tier:'A',
    trending:true
},
{
    id:'smith-hip-thrust',
    name:'Smith Machine Hip Thrust',
    primary:'Glutes',
    secondary:['Hamstrings'],
    scheme:'3 × 8-12',
    tier:'S',
    trending:true
},
{
    id:'rdl-dumbbell',
    name:'Dumbbell Romanian Deadlift',
    primary:'Hamstrings',
    secondary:['Glutes','Back'],
    scheme:'3 × 8-12',
    tier:'S',
    trending:true
},
{
    id:'cable-row-single',
    name:'Single-Arm Cable Row',
    primary:'Back',
    secondary:['Biceps','Rear Delts'],
    scheme:'3 × 10-12',
    tier:'A',
    trending:true
},
{
    id:'t-bar-row',
    name:'T-Bar Row',
    primary:'Back',
    secondary:['Biceps','Rear Delts'],
    scheme:'3 × 8-12',
    tier:'S',
    trending:true
},
{
    id:'machine-high-row',
    name:'Machine High Row',
    primary:'Back',
    secondary:['Biceps','Rear Delts'],
    scheme:'3 × 8-12',
    tier:'S',
    trending:true
},
{
    id:'straight-arm-pulldown',
    name:'Straight-Arm Cable Pulldown',
    primary:'Lats',
    secondary:['Back','Core','Triceps'],
    scheme:'3 × 12-15',
    tier:'A',
    trending:true
},
{
    id:'assisted-pullup',
    name:'Assisted Pull-Up',
    primary:'Back',
    secondary:['Lats','Biceps','Forearms'],
    scheme:'3 × 8-12',
    tier:'A',
    trending:true
},
{
    id:'neutral-grip-pulldown',
    name:'Neutral-Grip Lat Pulldown',
    primary:'Lats',
    secondary:['Back','Biceps'],
    scheme:'3 × 8-12',
    tier:'S',
    trending:true
},
{
    id:'machine-chest-press',
    name:'Machine Chest Press',
    primary:'Chest',
    secondary:['Triceps','Front Delts'],
    scheme:'3 × 8-12',
    tier:'A',
    trending:true
},
{
    id:'smith-incline-press',
    name:'Smith Machine Incline Press',
    primary:'Chest',
    secondary:['Upper Chest','Front Delts','Triceps'],
    scheme:'3 × 8-12',
    tier:'S',
    trending:true
},
{
    id:'low-to-high-cable-fly',
    name:'Low-to-High Cable Fly',
    primary:'Chest',
    secondary:['Upper Chest','Front Delts'],
    scheme:'3 × 12-15',
    tier:'A',
    trending:true
},
{
    id:'high-to-low-cable-fly',
    name:'High-to-Low Cable Fly',
    primary:'Chest',
    secondary:['Lower Chest','Triceps'],
    scheme:'3 × 12-15',
    tier:'A',
    trending:true
},
{
    id:'deficit-pushup',
    name:'Deficit Push-Up',
    primary:'Chest',
    secondary:['Triceps','Front Delts','Core'],
    scheme:'3 × 8-15',
    tier:'A',
    trending:true
},
{
    id:'cable-lateral-raise-single',
    name:'Single-Arm Cable Lateral Raise',
    primary:'Side Delts',
    secondary:['Shoulders'],
    scheme:'3 × 12-20',
    tier:'S',
    trending:true
},
{
    id:'machine-lateral-raise',
    name:'Lateral Raise Machine',
    primary:'Side Delts',
    secondary:['Shoulders'],
    scheme:'3 × 12-20',
    tier:'S',
    trending:true
},
{
    id:'arnold-press',
    name:'Arnold Press',
    primary:'Shoulders',
    secondary:['Triceps','Side Delts'],
    scheme:'3 × 8-12',
    tier:'A',
    trending:true
},
{
    id:'cable-rear-delt',
    name:'Cable Rear Delt Fly',
    primary:'Rear Delts',
    secondary:['Shoulders','Upper Back'],
    scheme:'3 × 12-20',
    tier:'A',
    trending:true
},
{
    id:'bayesian-curl',
    name:'Bayesian Cable Curl',
    primary:'Biceps',
    secondary:['Forearms'],
    scheme:'3 × 10-15',
    tier:'S',
    trending:true
},
{
    id:'spider-curl',
    name:'Spider Curl',
    primary:'Biceps',
    secondary:['Forearms'],
    scheme:'3 × 10-15',
    tier:'A',
    trending:true
},
{
    id:'cable-hammer-curl',
    name:'Rope Cable Hammer Curl',
    primary:'Brachialis',
    secondary:['Biceps','Forearms'],
    scheme:'3 × 10-15',
    tier:'A',
    trending:true
},
{
    id:'cross-body-hammer',
    name:'Cross-Body Hammer Curl',
    primary:'Brachialis',
    secondary:['Biceps','Forearms'],
    scheme:'3 × 10-12',
    tier:'A',
    trending:true
},
{
    id:'single-arm-pushdown',
    name:'Single-Arm Cable Pushdown',
    primary:'Triceps',
    secondary:[],
    scheme:'3 × 10-15',
    tier:'A',
    trending:true
},
{
    id:'cross-body-tricep',
    name:'Cross-Body Cable Triceps Extension',
    primary:'Triceps',
    secondary:[],
    scheme:'3 × 12-15',
    tier:'A',
    trending:true
},
{
    id:'rope-overhead-extension',
    name:'Rope Overhead Triceps Extension',
    primary:'Triceps',
    secondary:[],
    scheme:'3 × 10-15',
    tier:'S',
    trending:true
},
{
    id:'cable-crunch-kneeling',
    name:'Kneeling Cable Crunch',
    primary:'Abs',
    secondary:['Core'],
    scheme:'3 × 10-15',
    tier:'A',
    trending:true
},
{
    id:'hanging-knee-raise',
    name:'Hanging Knee Raise',
    primary:'Abs',
    secondary:['Core','Hip Flexors'],
    scheme:'3 × 10-15',
    tier:'A',
    trending:true
},
{
    id:'hanging-leg-raise',
    name:'Hanging Leg Raise',
    primary:'Abs',
    secondary:['Core','Hip Flexors'],
    scheme:'3 × 8-15',
    tier:'S',
    trending:true
},
{
    id:'decline-situp',
    name:'Decline Sit-Up',
    primary:'Abs',
    secondary:['Core','Hip Flexors'],
    scheme:'3 × 10-15',
    tier:'A',
    trending:true
},
{
    id:'cable-woodchop',
    name:'Cable Woodchop',
    primary:'Core',
    secondary:['Abs','Obliques'],
    scheme:'3 × 10-15 / side',
    tier:'A',
    trending:true
},
{
    id:'abduction-machine',
    name:'Hip Abduction Machine',
    primary:'Glutes',
    secondary:['Hip Abductors'],
    scheme:'3 × 12-20',
    tier:'A',
    trending:true
},
{
    id:'adductor-machine',
    name:'Adductor Machine',
    primary:'Adductors',
    secondary:['Inner Thighs'],
    scheme:'3 × 12-20',
    tier:'A',
    trending:true
},
{
    id:'calf-raise-machine',
    name:'Seated Calf Raise',
    primary:'Calves',
    secondary:[],
    scheme:'4 × 10-20',
    tier:'A',
    trending:true
},
{
    id:'standing-calf-machine',
    name:'Standing Calf Raise Machine',
    primary:'Calves',
    secondary:[],
    scheme:'4 × 10-20',
    tier:'A',
    trending:true
},
{
    id:'reverse-curl',
    name:'Reverse EZ-Bar Curl',
    primary:'Forearms',
    secondary:['Brachialis','Biceps'],
    scheme:'3 × 10-15',
    tier:'A',
    trending:true
},
{
    id:'wrist-roller',
    name:'Wrist Roller',
    primary:'Forearms',
    secondary:[],
    scheme:'3 rounds',
    tier:'A',
    trending:true
},
{
    id:'suitcase-carry',
    name:'Suitcase Carry',
    primary:'Core',
    secondary:['Forearms','Obliques'],
    scheme:'3 × 30-45 sec / side',
    tier:'A',
    trending:true
},
{
    id:'sled-push',
    name:'Sled Push',
    primary:'Quads',
    secondary:['Glutes','Calves','Core'],
    scheme:'4 × 20-30 m',
    tier:'S',
    trending:true
},
{
    id:'walking-lunge',
    name:'Walking Lunge',
    primary:'Quads',
    secondary:['Glutes','Hamstrings','Core'],
    scheme:'3 × 10-12 / leg',
    tier:'A',
    trending:true
},
{
    id:'reverse-lunge',
    name:'Dumbbell Reverse Lunge',
    primary:'Glutes',
    secondary:['Quads','Hamstrings','Core'],
    scheme:'3 × 8-12 / leg',
    tier:'A',
    trending:true
},
{
    id:'step-up',
    name:'Dumbbell Step-Up',
    primary:'Glutes',
    secondary:['Quads','Hamstrings'],
    scheme:'3 × 8-12 / leg',
    tier:'A',
    trending:true
},
{
    id:'cossack-squat',
    name:'Cossack Squat',
    primary:'Quads',
    secondary:['Glutes','Adductors','Inner Thighs','Core'],
    scheme:'3 × 6-10 / side',
    tier:'A',
    trending:true
},
{
    id:'landmine-press',
    name:'Landmine Press',
    primary:'Shoulders',
    secondary:['Upper Chest','Front Delts','Triceps','Core'],
    scheme:'3 × 8-12',
    tier:'A',
    trending:true
},
{
    id:'landmine-row',
    name:'Landmine Row',
    primary:'Back',
    secondary:['Biceps','Rear Delts','Core'],
    scheme:'3 × 8-12',
    tier:'A',
    trending:true
}

];


/* =====================================================
   BEGINNER-TO-INTERMEDIATE PROGRAMS
===================================================== */

const BUILTIN_PROGRAMS = [
    {
        id:"beginner-two-day-full-body",
        name:"Beginner 2-Day Full Body",
        level:"Beginner",
        frequency:"2 days / week",
        description:"A low-frequency starting point for busy schedules or brand-new lifters. Train on non-consecutive days and keep a few reps in reserve while learning each movement.",
        days:{
            Monday:{focus:"Full Body A", exercises:[["Leg Press","3 × 8-12"],["Dumbbell Bench Press","3 × 8-12"],["Seated Cable Row","3 × 8-12"],["Leg Curl","2 × 10-15"],["Plank","2 × 20-40 sec"]]},
            Tuesday:{focus:"Rest", exercises:[]},
            Wednesday:{focus:"Rest / Easy Walk", exercises:[]},
            Thursday:{focus:"Full Body B", exercises:[["Back Squat","3 × 6-10"],["Lat Pulldown","3 × 8-12"],["Dumbbell Shoulder Press","2 × 8-12"],["Romanian Deadlift","2 × 8-10"],["Cable Crunch","2 × 10-15"]]},
            Friday:{focus:"Rest", exercises:[]},
            Saturday:{focus:"Rest / Optional Walk", exercises:[]},
            Sunday:{focus:"Rest", exercises:[]}
        }
    },
    {
        id:"beginner-three-day-upper-lower",
        name:"Beginner 3-Day Upper / Lower",
        level:"Beginner",
        frequency:"3 days / week",
        description:"An alternating upper/lower plan with a third full-body session. It spreads training across the week without requiring four gym visits.",
        days:{
            Monday:{focus:"Upper Body", exercises:[["Barbell Bench Press","3 × 6-10"],["Seated Cable Row","3 × 8-12"],["Lat Pulldown","2 × 8-12"],["Lateral Raise","2 × 12-15"],["Hammer Curl","2 × 10-12"]]},
            Tuesday:{focus:"Rest", exercises:[]},
            Wednesday:{focus:"Lower Body", exercises:[["Back Squat","3 × 6-10"],["Romanian Deadlift","3 × 8-10"],["Leg Press","2 × 10-12"],["Leg Curl","2 × 10-15"],["Standing Calf Raise","2 × 10-15"]]},
            Thursday:{focus:"Rest / Easy Walk", exercises:[]},
            Friday:{focus:"Full Body", exercises:[["Leg Press","2 × 10-12"],["Incline Dumbbell Press","3 × 8-12"],["Chest Supported Row","3 × 8-12"],["Barbell Hip Thrust","2 × 8-12"],["Plank","2 × 30-45 sec"]]},
            Saturday:{focus:"Rest / Optional Walk", exercises:[]},
            Sunday:{focus:"Rest", exercises:[]}
        }
    },
    {
        id:"beginner-full-body",
        name:"Beginner Full Body",
        level:"Beginner",
        frequency:"3 days / week",
        description:"A simple three-day foundation with recovery days between sessions. Practice the main movement patterns and build a steady routine.",
        days:{
            Monday:{focus:"Full Body A", exercises:[["Back Squat","3 × 6-8"],["Barbell Bench Press","3 × 6-8"],["Lat Pulldown","3 × 8-12"],["Plank","3 × 30-45 sec"]]},
            Tuesday:{focus:"Rest / Optional Walk", exercises:[]},
            Wednesday:{focus:"Full Body B", exercises:[["Romanian Deadlift","3 × 8"],["Dumbbell Bench Press","3 × 8-12"],["Seated Cable Row","3 × 8-12"],["Leg Press","2 × 10-12"]]},
            Thursday:{focus:"Rest / Mobility", exercises:[]},
            Friday:{focus:"Full Body C", exercises:[["Leg Press","3 × 8-12"],["Overhead Press","3 × 6-10"],["Chest Supported Row","3 × 8-12"],["Leg Curl","2 × 10-15"],["Cable Crunch","2 × 10-15"]]},
            Saturday:{focus:"Rest / Optional Walk", exercises:[]},
            Sunday:{focus:"Rest", exercises:[]}
        }
    },
    {
        id:"beginner-upper-lower",
        name:"Beginner Upper / Lower",
        level:"Beginner",
        frequency:"4 days / week",
        description:"A balanced four-day option for beginners who want shorter sessions, with each major area trained twice weekly.",
        days:{
            Monday:{focus:"Upper A", exercises:[["Barbell Bench Press","3 × 6-8"],["Seated Cable Row","3 × 8-12"],["Dumbbell Shoulder Press","2 × 8-10"],["Lat Pulldown","2 × 8-12"],["Cable Pushdown","2 × 10-15"]]},
            Tuesday:{focus:"Lower A", exercises:[["Back Squat","3 × 5-8"],["Romanian Deadlift","3 × 8-10"],["Leg Curl","2 × 10-15"],["Standing Calf Raise","3 × 10-15"]]},
            Wednesday:{focus:"Rest", exercises:[]},
            Thursday:{focus:"Upper B", exercises:[["Incline Dumbbell Press","3 × 8-12"],["Chest Supported Row","3 × 8-12"],["Lateral Raise","2 × 12-15"],["Pull-Up","2 × 6-10"],["Hammer Curl","2 × 10-12"]]},
            Friday:{focus:"Lower B", exercises:[["Leg Press","3 × 8-12"],["Barbell Hip Thrust","3 × 8-12"],["Walking Lunges","2 × 8-10 / leg"],["Standing Calf Raise","3 × 10-15"],["Plank","3 × 30-45 sec"]]},
            Saturday:{focus:"Rest / Optional Walk", exercises:[]},
            Sunday:{focus:"Rest", exercises:[]}
        }
    },
    {
        id:"intermediate-upper-lower",
        name:"Intermediate Upper / Lower",
        level:"Intermediate",
        frequency:"4 days / week",
        description:"A progressive four-day split with more weekly sets and a mix of compound and accessory work. Use only when the beginner plan feels familiar and recovery is consistent.",
        days:{
            Monday:{focus:"Upper Strength", exercises:[["Barbell Bench Press","4 × 5-8"],["Barbell Row","4 × 6-10"],["Overhead Press","3 × 6-10"],["Pull-Up","3 × 6-10"],["Barbell Curl","2 × 8-12"]]},
            Tuesday:{focus:"Lower Strength", exercises:[["Back Squat","4 × 5-8"],["Romanian Deadlift","3 × 6-10"],["Leg Press","3 × 10-12"],["Leg Curl","3 × 10-15"],["Standing Calf Raise","3 × 10-15"]]},
            Wednesday:{focus:"Rest", exercises:[]},
            Thursday:{focus:"Upper Hypertrophy", exercises:[["Incline Dumbbell Press","3 × 8-12"],["Seated Cable Row","3 × 8-12"],["Dumbbell Shoulder Press","3 × 8-12"],["Lat Pulldown","3 × 10-12"],["Lateral Raise","3 × 12-20"],["Cable Pushdown","2 × 10-15"]]},
            Friday:{focus:"Lower Hypertrophy", exercises:[["Front Squat","3 × 6-10"],["Barbell Hip Thrust","3 × 8-12"],["Walking Lunges","3 × 10 / leg"],["Leg Curl","3 × 10-15"],["Cable Crunch","3 × 10-15"]]},
            Saturday:{focus:"Rest / Optional Easy Activity", exercises:[]},
            Sunday:{focus:"Rest", exercises:[]}
        }
    },
    {
        id:"intermediate-ppl",
        name:"Intermediate Push / Pull / Legs",
        level:"Intermediate",
        frequency:"5 days / week",
        description:"A five-day rotation for experienced, consistent lifters who want focused sessions. Keep at least one full rest day and adjust volume if recovery drops.",
        days:{
            Monday:{focus:"Push", exercises:[["Barbell Bench Press","4 × 5-8"],["Overhead Press","3 × 6-10"],["Incline Dumbbell Press","3 × 8-12"],["Lateral Raise","3 × 12-20"],["Cable Pushdown","3 × 10-15"]]},
            Tuesday:{focus:"Pull", exercises:[["Deadlift","3 × 4-6"],["Pull-Up","3 × 6-10"],["Barbell Row","3 × 6-10"],["Face Pull","3 × 12-15"],["Hammer Curl","3 × 10-12"]]},
            Wednesday:{focus:"Legs", exercises:[["Back Squat","4 × 5-8"],["Romanian Deadlift","3 × 8-10"],["Leg Press","3 × 10-12"],["Leg Curl","3 × 10-15"],["Standing Calf Raise","4 × 10-15"]]},
            Thursday:{focus:"Rest", exercises:[]},
            Friday:{focus:"Upper", exercises:[["Dumbbell Bench Press","3 × 8-12"],["Seated Cable Row","3 × 8-12"],["Dumbbell Shoulder Press","3 × 8-12"],["Lat Pulldown","3 × 10-12"],["Barbell Curl","2 × 10-12"],["Skull Crushers","2 × 10-12"]]},
            Saturday:{focus:"Lower", exercises:[["Front Squat","3 × 6-10"],["Barbell Hip Thrust","3 × 8-12"],["Walking Lunges","3 × 10 / leg"],["Leg Curl","3 × 10-15"],["Plank","3 × 30-60 sec"]]},
            Sunday:{focus:"Rest", exercises:[]}
        }
    }
];

let selectedBuiltinProgramId = BUILTIN_PROGRAMS[0].id;


/* =====================================================
   STATE
===================================================== */

const DEFAULT_STATE = {

    selectedDay:0,

    selectedMuscles:[],

    customWorkouts:{
        Monday:[], Tuesday:[], Wednesday:[], Thursday:[], Friday:[],
        Saturday:[], Sunday:[]
    },

    progress:[],

    trainedDates:[],

    prs:{},

    trainDaysPerWeek:5,

    nutritionEntries:[],

    nutritionGoals:{
        calories:2200,
        protein:150,
        carbs:250,
        fat:70
    },

    nutritionDate:""
};

let state = structuredClone(DEFAULT_STATE);
const STORAGE_KEY = "yao-fitness-state-v1";
let supabaseClient = null;
let currentUser = null;
let stateSaveQueue = Promise.resolve();

function normalizeState(savedState){
    if(!savedState || typeof savedState !== "object" || Array.isArray(savedState)){
        return structuredClone(DEFAULT_STATE);
    }

    return {
        ...structuredClone(DEFAULT_STATE),
        ...savedState,
        selectedMuscles:Array.isArray(savedState.selectedMuscles) ? savedState.selectedMuscles : [],
        customWorkouts:{...DEFAULT_STATE.customWorkouts, ...(savedState.customWorkouts || {})},
        progress:Array.isArray(savedState.progress) ? savedState.progress : [],
        trainedDates:Array.isArray(savedState.trainedDates) ? savedState.trainedDates : [],
        prs:savedState.prs && typeof savedState.prs === "object" && !Array.isArray(savedState.prs) ? savedState.prs : {},
        trainDaysPerWeek:Number.isInteger(savedState.trainDaysPerWeek) && savedState.trainDaysPerWeek >= 1 && savedState.trainDaysPerWeek <= 7
            ? savedState.trainDaysPerWeek
            : DEFAULT_STATE.trainDaysPerWeek,
        nutritionEntries:Array.isArray(savedState.nutritionEntries) ? savedState.nutritionEntries.filter(entry =>
            entry && typeof entry === "object" && isValidNutritionDate(entry.date) &&
            typeof entry.food === "string" && ["Breakfast", "Lunch", "Dinner", "Snack"].includes(entry.meal) &&
            Number.isFinite(Number(entry.calories)) && Number(entry.calories) >= 0 && Number(entry.calories) <= 20000 &&
            Number.isFinite(Number(entry.protein)) && Number(entry.protein) >= 0 && Number(entry.protein) <= 1000 &&
            Number.isFinite(Number(entry.carbs)) && Number(entry.carbs) >= 0 && Number(entry.carbs) <= 2000 &&
            Number.isFinite(Number(entry.fat)) && Number(entry.fat) >= 0 && Number(entry.fat) <= 1000
        ).map(entry => ({
            ...entry,
            id:typeof entry.id === "string" ? entry.id : `food-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            portion:typeof entry.portion === "string" ? entry.portion : "",
            calories:Math.max(0, Number(entry.calories)),
            protein:Math.max(0, Number(entry.protein)),
            carbs:Math.max(0, Number(entry.carbs)),
            fat:Math.max(0, Number(entry.fat))
        })) : [],
        nutritionGoals:{
            calories:Number.isFinite(Number(savedState.nutritionGoals?.calories)) && Number(savedState.nutritionGoals.calories) > 0 && Number(savedState.nutritionGoals.calories) <= 20000
                ? Number(savedState.nutritionGoals.calories)
                : DEFAULT_STATE.nutritionGoals.calories,
            protein:Number.isFinite(Number(savedState.nutritionGoals?.protein)) && Number(savedState.nutritionGoals.protein) >= 0 && Number(savedState.nutritionGoals.protein) <= 1000
                ? Number(savedState.nutritionGoals.protein)
                : DEFAULT_STATE.nutritionGoals.protein,
            carbs:Number.isFinite(Number(savedState.nutritionGoals?.carbs)) && Number(savedState.nutritionGoals.carbs) >= 0 && Number(savedState.nutritionGoals.carbs) <= 2000
                ? Number(savedState.nutritionGoals.carbs)
                : DEFAULT_STATE.nutritionGoals.carbs,
            fat:Number.isFinite(Number(savedState.nutritionGoals?.fat)) && Number(savedState.nutritionGoals.fat) >= 0 && Number(savedState.nutritionGoals.fat) <= 1000
                ? Number(savedState.nutritionGoals.fat)
                : DEFAULT_STATE.nutritionGoals.fat
        },
        nutritionDate:isValidNutritionDate(savedState.nutritionDate) && savedState.nutritionDate <= localDateKey()
            ? savedState.nutritionDate
            : ""
    };
}

function isValidNutritionDate(value){
    if(typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const date = new Date(`${value}T00:00:00`);
    return !Number.isNaN(date.getTime()) && localDateKey(date) === value;
}

function isGitHubPages(){
    return window.location.hostname.endsWith(".github.io");
}

function getAuthRedirectUrl(){
    const appPath = isGitHubPages() ? "/Yao/" : "/";
    return new URL(appPath, window.location.origin).href;
}

async function loadInitialState(){
    document.body.classList.remove("locked-auth");
    document.body.classList.add("authenticated");

    if(!isGitHubPages()){
        try{
            const response = await fetch("/api/state", { cache: "no-store" });
            if(response.ok){
                const savedState = await response.json();
                state = normalizeState(savedState);
            }
        }catch(error){
            console.warn("Could not load saved state from server; using local storage fallback.", error);
        }
    }

    try{
        const savedRaw = localStorage.getItem(STORAGE_KEY);
        if(savedRaw){
            state = normalizeState(JSON.parse(savedRaw));
        }
    }catch(error){
        console.warn("Could not load local fallback state.", error);
    }

    init();
}


/* =====================================================
   SAVE
===================================================== */

function saveState(){
    const snapshot = structuredClone(state);

    try{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    }catch(error){
        console.warn("Could not persist local state.", error);
    }

    if (supabaseClient && currentUser) {
        const userId = currentUser.id;
        const saveStatus = document.getElementById("authSaveStatus");
        if(saveStatus) saveStatus.textContent = "Saving";

        stateSaveQueue = stateSaveQueue.then(async()=>{
            if(!supabaseClient || currentUser?.id !== userId) return;

            const {error} = await supabaseClient
                .from("fitness_state")
                .upsert({
                    user_id:userId,
                    state:snapshot,
                    updated_at:new Date().toISOString()
                }, {onConflict:"user_id"});

            if(error) throw error;
            if(currentUser?.id === userId && saveStatus){
                saveStatus.textContent = "Saved";
            }
        }).catch(error=>{
            console.error("Could not save fitness data.", error);
            if(currentUser?.id === userId && saveStatus){
                saveStatus.textContent = "Save failed";
            }
        });
        return;
    }

    if(!isGitHubPages()){
        fetch("/api/state", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(snapshot)
        }).catch(error => {
            console.warn("Server sync failed; local storage retained the latest data.", error);
        });
    }
}


/* =====================================================
   TABS & MODAL CONTROLS
===================================================== */

function switchTab(tab){

    document
        .querySelectorAll(".tabs button")
        .forEach(btn=>{
            const isActive = btn.dataset.tab === tab;
            btn.classList.toggle("active", isActive);
            btn.setAttribute("aria-selected", String(isActive));
        });

    document
        .querySelectorAll(".panel")
        .forEach(panel=>{
            panel.classList.toggle(
                "active",
                panel.id==="panel-"+tab
            );
        });

    if (tab === "track") {
        updateTrackExerciseMetrics();
    }
    if (tab === "nutrition") {
        renderNutrition();
    }

}

window.switchTab = switchTab;


/* =====================================================
   FEEDBACK SYSTEM
===================================================== */

(function(){

    const FEEDBACK_KEY = "yaoFitness_feedback";
    let selectedRating = 0;

    /* Star rating interaction */
    const ratingContainer = document.getElementById("feedbackRating");
    if (ratingContainer) {
        const stars = ratingContainer.querySelectorAll(".rating-star");

        stars.forEach(star => {
            star.addEventListener("click", () => {
                selectedRating = parseInt(star.dataset.value);
                stars.forEach(s => {
                    s.classList.toggle("active", parseInt(s.dataset.value) <= selectedRating);
                });
            });

            star.addEventListener("mouseenter", () => {
                const hoverVal = parseInt(star.dataset.value);
                stars.forEach(s => {
                    s.classList.toggle("active", parseInt(s.dataset.value) <= hoverVal);
                });
            });
        });

        ratingContainer.addEventListener("mouseleave", () => {
            stars.forEach(s => {
                s.classList.toggle("active", parseInt(s.dataset.value) <= selectedRating);
            });
        });
    }

    /* Load saved feedback */
    function loadFeedback() {
        try {
            return JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || [];
        } catch(e) {
            return [];
        }
    }

    /* Save feedback */
    function saveFeedback(list) {
        localStorage.setItem(FEEDBACK_KEY, JSON.stringify(list));
    }

    /* Render feedback history */
    function renderFeedbackHistory() {
        const list = loadFeedback();
        const historyCard = document.getElementById("feedbackHistoryCard");
        const feedbackList = document.getElementById("feedbackList");
        if (!historyCard || !feedbackList) return;

        if (list.length === 0) {
            historyCard.style.display = "none";
            return;
        }

        historyCard.style.display = "";
        feedbackList.innerHTML = list.map(entry => {
            const stars = entry.rating > 0
                ? `<div class="feedback-entry-stars">${"★".repeat(entry.rating)}${"☆".repeat(5 - entry.rating)}</div>`
                : "";
            const date = new Date(entry.timestamp).toLocaleDateString("en-US", {
                month: "short", day: "numeric", year: "numeric",
                hour: "2-digit", minute: "2-digit"
            });
            return `
                <div class="feedback-entry">
                    <div class="feedback-entry-header">
                        <span class="feedback-entry-category">${entry.category}</span>
                        <span class="feedback-entry-date">${date}</span>
                    </div>
                    ${stars}
                    <div class="feedback-entry-message">${entry.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
                </div>
            `;
        }).join("");
    }

    /* Form submission */
    const feedbackForm = document.getElementById("feedbackForm");
    const feedbackStatus = document.getElementById("feedbackStatus");

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const message = document.getElementById("feedbackMessage").value.trim();
            if (!message) {
                feedbackStatus.textContent = "Please enter a message.";
                feedbackStatus.className = "feedback-status error";
                return;
            }

            const entry = {
                name: document.getElementById("feedbackName").value.trim(),
                email: document.getElementById("feedbackEmail").value.trim(),
                rating: selectedRating,
                category: document.getElementById("feedbackCategory").value,
                message: message,
                timestamp: Date.now()
            };

            const list = loadFeedback();
            list.unshift(entry);
            saveFeedback(list);

            /* Reset form */
            feedbackForm.reset();
            selectedRating = 0;
            if (ratingContainer) {
                ratingContainer.querySelectorAll(".rating-star").forEach(s => s.classList.remove("active"));
            }

            feedbackStatus.textContent = "✓ Thank you! Your feedback has been saved.";
            feedbackStatus.className = "feedback-status success";

            setTimeout(() => {
                feedbackStatus.textContent = "";
                feedbackStatus.className = "feedback-status";
            }, 4000);

            renderFeedbackHistory();
        });
    }

    /* Clear all feedback */
    const clearBtn = document.getElementById("clearFeedbackBtn");
    if (clearBtn) {
        clearBtn.addEventListener("click", function() {
            if (confirm("Clear all saved feedback?")) {
                saveFeedback([]);
                renderFeedbackHistory();
            }
        });
    }

    /* Initial render */
    renderFeedbackHistory();

})();

function toggleAuthModal(show){
    const authGate = document.getElementById("authGate");
    if (!authGate) return;
    if (typeof show === "boolean") {
        authGate.hidden = !show;
    } else {
        authGate.hidden = !authGate.hidden;
    }
}

window.toggleAuthModal = toggleAuthModal;

document
    .querySelectorAll(".tabs button")
    .forEach(btn=>{

        btn.addEventListener(
            "click",
            ()=>{
                switchTab(btn.dataset.tab);
            }
        );

    });


/* =====================================================
   MUSCLE GROUPS
===================================================== */

const MUSCLES = [

    "Chest",
    "Back",
    "Shoulders",
    "Side Delts",
    "Rear Delts",
    "Biceps",
    "Triceps",
    "Quads",
    "Hamstrings",
    "Glutes",
    "Calves",
    "Core",
    "Abs",
    "Forearms",
    "Brachialis",
    "Lats",
    "Upper Chest",
    "Traps",
    "Obliques",
    "Adductors",
    "Hip Abductors",
    "Inner Thighs",
    "Hip Flexors"

];


/* =====================================================
   DAY TABS
===================================================== */

const DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];


function renderDayTabs(){

    const el =
        document.getElementById("dayTabs");
    if(!el) return;

    el.innerHTML =
        DAYS.map(
            (day,i)=>`

            <button
                class="day-btn ${state.selectedDay===i?"active":""}"
                data-day="${i}"
                aria-selected="${state.selectedDay===i}"
                type="button"
            >
                <span class="day-short">${day.slice(0,3)}</span>
                <span class="day-full">${day}</span>
            </button>

            `
        ).join("");

    const targetDayLabel = document.getElementById("targetDayLabel");
    if(targetDayLabel){
        targetDayLabel.textContent = DAYS[state.selectedDay];
    }

    el.querySelectorAll(".day-btn")
        .forEach(btn=>{

            btn.addEventListener(
                "click",
                ()=>{

                    state.selectedDay =
                        Number(btn.dataset.day);

                    state.selectedMuscles=[];

                    const picker =
                        document.getElementById("exercisePicker");

                    if (picker) {
                        picker.innerHTML = "";
                    }

                    renderWorkout();

                }
            );

        });

}


/* =====================================================
   MUSCLE SELECTOR
===================================================== */

function renderMuscleSelector(){

    const el =
        document.getElementById(
            "muscleSelector"
        );
    if(!el) return;

    const countBadge = document.getElementById("muscleCountBadge");
    if(countBadge){
        const count = state.selectedMuscles.length;
        countBadge.textContent = count === 0 ? "0 selected" : `${count} selected`;
    }

    el.innerHTML =
        MUSCLES.map(
            muscle=>`

            <button
                class="muscle-btn ${
                    state.selectedMuscles.includes(muscle)
                    ? "selected"
                    : ""
                }"
                data-muscle="${muscle}"
                type="button"
            >
                ${muscle}
            </button>

            `
        ).join("");

    el.querySelectorAll(".muscle-btn")
        .forEach(btn=>{

            btn.addEventListener(
                "click",
                ()=>{

                    const muscle =
                        btn.dataset.muscle;

                    if(
                        state.selectedMuscles
                        .includes(muscle)
                    ){

                        state.selectedMuscles =
                            state.selectedMuscles
                            .filter(
                                x=>x!==muscle
                            );

                    }else{

                        state.selectedMuscles
                            .push(muscle);

                    }

                    renderMuscleSelector();

                }
            );

        });

}


/* =====================================================
   MUSCLE TAXONOMY & RELATIONSHIP ENGINE
   Ensures comprehensive, accurate muscle and movement
   matching across compound, primary, and secondary targets.
===================================================== */

const MUSCLE_TAXONOMY = {
    "Chest": ["Chest", "Upper Chest", "Lower Chest", "Pecs"],
    "Upper Chest": ["Upper Chest", "Clavicular Head"],
    "Lower Chest": ["Lower Chest", "Sternal Head"],
    "Back": ["Back", "Lats", "Upper Back", "Mid Back", "Lower Back"],
    "Lats": ["Lats", "Lat", "Latissimus"],
    "Upper Back": ["Upper Back", "Mid Back", "Traps", "Upper Traps", "Rhomboids"],
    "Shoulders": ["Shoulders", "Front Delts", "Side Delts", "Rear Delts", "Rotator Cuff", "Deltoids"],
    "Front Delts": ["Front Delts", "Anterior Delts"],
    "Side Delts": ["Side Delts", "Lateral Delts"],
    "Rear Delts": ["Rear Delts", "Posterior Delts"],
    "Traps": ["Traps", "Upper Traps"],
    "Biceps": ["Biceps"],
    "Triceps": ["Triceps", "Long Head Triceps"],
    "Brachialis": ["Brachialis"],
    "Forearms": ["Forearms", "Grip"],
    "Quads": ["Quads", "Quadriceps", "Legs"],
    "Hamstrings": ["Hamstrings", "Posterior Chain"],
    "Glutes": ["Glutes", "Gluteus"],
    "Calves": ["Calves", "Gastrocnemius", "Soleus"],
    "Core": ["Core", "Abs", "Obliques", "Lower Back", "Serratus", "Hip Flexors"],
    "Abs": ["Abs", "Abdominals"],
    "Obliques": ["Obliques"],
    "Adductors": ["Adductors", "Inner Thighs"],
    "Inner Thighs": ["Inner Thighs", "Adductors"],
    "Hip Abductors": ["Hip Abductors"],
    "Hip Flexors": ["Hip Flexors"],
    "Conditioning": ["Conditioning", "Explosive Legs", "Grip"]
};

function getExerciseTargetProfile(exercise) {
    const primary = [String(exercise.primary || "").trim()];
    const secondary = Array.isArray(exercise.secondary)
        ? exercise.secondary.map(s => String(s).trim()).filter(Boolean)
        : [];

    const name = String(exercise.name || "").toLowerCase();

    // Contextual enrichment based on movement mechanics
    if (name.includes("incline") && (name.includes("press") || name.includes("fly"))) {
        if (!secondary.includes("Upper Chest")) secondary.push("Upper Chest");
    }
    if (name.includes("decline") && name.includes("press")) {
        if (!secondary.includes("Lower Chest")) secondary.push("Lower Chest");
        if (!secondary.includes("Chest")) secondary.push("Chest");
    }
    if (name.includes("lat pulldown") || name.includes("pull-up") || name.includes("pullover") || name.includes("chin-up")) {
        if (!primary.includes("Lats") && !secondary.includes("Lats")) secondary.push("Lats");
        if (!primary.includes("Back") && !secondary.includes("Back")) secondary.push("Back");
    }
    if (name.includes("face pull") || name.includes("rear delt")) {
        if (!secondary.includes("Shoulders")) secondary.push("Shoulders");
        if (!secondary.includes("Rear Delts")) secondary.push("Rear Delts");
    }
    if (name.includes("lateral raise") || name.includes("y-raise")) {
        if (!secondary.includes("Shoulders")) secondary.push("Shoulders");
        if (!secondary.includes("Side Delts")) secondary.push("Side Delts");
    }
    if (name.includes("front raise") || name.includes("shoulder press")) {
        if (!secondary.includes("Shoulders")) secondary.push("Shoulders");
        if (!secondary.includes("Front Delts")) secondary.push("Front Delts");
    }
    if (name.includes("calf raise")) {
        if (!primary.includes("Calves") && !secondary.includes("Calves")) secondary.push("Calves");
    }
    if (name.includes("farmer") || name.includes("wrist") || name.includes("pinch")) {
        if (!primary.includes("Forearms") && !secondary.includes("Forearms")) secondary.push("Forearms");
        if (!secondary.includes("Grip")) secondary.push("Grip");
    }
    if (name.includes("adductor") || name.includes("cossack")) {
        if (!primary.includes("Adductors") && !secondary.includes("Adductors")) secondary.push("Adductors");
        if (!secondary.includes("Inner Thighs")) secondary.push("Inner Thighs");
    }
    if (name.includes("abduction") || name.includes("abductor")) {
        if (!secondary.includes("Hip Abductors")) secondary.push("Hip Abductors");
    }

    return {
        primary: [...new Set(primary)],
        secondary: [...new Set(secondary)]
    };
}

function exerciseMatchesMuscleTarget(exercise, targetMuscle) {
    if (!exercise || !targetMuscle || targetMuscle === "all") return true;
    const profile = getExerciseTargetProfile(exercise);
    const family = (MUSCLE_TAXONOMY[targetMuscle] || [targetMuscle]).map(s => s.toLowerCase());

    const primMatch = profile.primary.some(p => family.includes(p.toLowerCase()));
    if (primMatch) return true;

    return profile.secondary.some(s => family.includes(s.toLowerCase()));
}

function scoreExerciseForMuscles(exercise, selectedMuscles) {
    if (!exercise || !Array.isArray(selectedMuscles) || selectedMuscles.length === 0) return null;

    const profile = getExerciseTargetProfile(exercise);
    const primaryHits = [];
    const secondaryHits = [];

    selectedMuscles.forEach(target => {
        const family = (MUSCLE_TAXONOMY[target] || [target]).map(s => s.toLowerCase());
        const isPrim = profile.primary.some(p => family.includes(p.toLowerCase()));
        if (isPrim) {
            primaryHits.push(target);
        } else {
            const isSec = profile.secondary.some(s => family.includes(s.toLowerCase()));
            if (isSec) {
                secondaryHits.push(target);
            }
        }
    });

    const totalHits = primaryHits.length + secondaryHits.length;
    if (totalHits === 0) return null;

    let score = 0;
    // Primary hits are heavily weighted
    score += primaryHits.length * 100;
    // Secondary hits provide synergy
    score += secondaryHits.length * 35;

    // Compound bonus when hitting multiple selected muscles
    if (totalHits > 1) {
        score += 220 * (totalHits - 1);
    }

    // Quality tier bonuses
    const tier = String(exercise.tier || "A").toUpperCase();
    if (tier === "S") score += 20;
    else if (tier === "A") score += 10;
    else if (tier === "B") score += 5;

    if (exercise.trending) score += 5;

    const matchedMuscles = [...new Set([...primaryHits, ...secondaryHits])];

    return {
        exercise,
        score,
        primaryHits,
        secondaryHits,
        matchedMuscles,
        isCompound: totalHits > 1,
        tier
    };
}

/* =====================================================
   FIND EXERCISES
===================================================== */

document
    .getElementById("findExercisesBtn")
    .addEventListener(
        "click",
        ()=>{
            if(state.selectedMuscles.length === 0){
                alert("Pick at least one muscle group first.");
                return;
            }
            pickerCurrentFilter = "all";
            pickerSearchQuery = "";
            renderExercisePicker();
        }
    );

let pickerCurrentFilter = "all";
let pickerSearchQuery = "";

function renderExercisePicker(){
    const el = document.getElementById("exercisePicker");
    if (!el) return;

    if (!state.selectedMuscles || state.selectedMuscles.length === 0) {
        el.innerHTML = "";
        return;
    }

    // Calculate scored exercises
    const scoredList = EXERCISES
        .map(ex => scoreExerciseForMuscles(ex, state.selectedMuscles))
        .filter(Boolean)
        .sort((a, b) => b.score - a.score);

    if (!scoredList.length) {
        el.innerHTML = `
            <div class="card picker-card">
                <div class="picker-header-row">
                    <div>
                        <h2>Recommended Exercises</h2>
                        <div class="sub">No exercises match those muscle groups yet.</div>
                    </div>
                    <button type="button" class="icon-btn-glass" onclick="document.getElementById('exercisePicker').innerHTML='';" aria-label="Close recommendations">✕</button>
                </div>
                <div class="empty">Try selecting another muscle group or browse the complete <a href="javascript:void(0)" onclick="switchTab('exercises')" style="color:var(--accent);text-decoration:underline;">Exercise Library</a>.</div>
            </div>
        `;
        return;
    }

    const totalMatches = scoredList.length;
    const compoundList = scoredList.filter(s => s.isCompound);
    const sTierCount = scoredList.filter(s => s.tier === "S").length;

    const getMuscleCount = (muscle) => scoredList.filter(s => s.matchedMuscles.includes(muscle)).length;

    const selectedNames = state.selectedMuscles.join(", ");
    const summaryPills = [];
    summaryPills.push(`<span class="picker-pill accent">${totalMatches} Found</span>`);
    if (state.selectedMuscles.length > 1 && compoundList.length > 0) {
        summaryPills.push(`<span class="picker-pill compound">${compoundList.length} Hits Multiple</span>`);
    }
    summaryPills.push(`<span class="picker-pill tier">${sTierCount} S-Tier</span>`);

    el.innerHTML = `
        <div class="card picker-card">
            <div class="picker-header-row">
                <div>
                    <div class="sub eyebrow-label" style="margin-bottom:4px;">EXERCISE FINDER</div>
                    <h2 style="font-size:24px;display:inline-flex;align-items:center;gap:10px;">
                        <span>Targeted Exercises</span>
                        <div class="picker-pills-row" style="display:inline-flex;gap:6px;">${summaryPills.join("")}</div>
                    </h2>
                    <div class="sub" style="margin-top:4px;">
                        Ranked by relevance for <strong style="color:var(--accent);">${selectedNames}</strong> on <strong style="color:var(--text-primary);">${DAYS[state.selectedDay]}</strong>.
                    </div>
                </div>

                <div class="picker-actions-top">
                    <button type="button" class="icon-btn-glass" id="closePickerBtn" title="Close recommendations" aria-label="Close recommendations">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
                    </button>
                </div>
            </div>

            <div class="picker-toolbar">
                <div class="search-input-wrapper picker-search">
                    <svg class="search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                    <input type="search" id="pickerSearchInput" placeholder="Filter recommendations (e.g. barbell, incline, cable)..." autocomplete="off" aria-label="Filter recommendations">
                </div>

                <div class="picker-chips" role="group" aria-label="Filter recommendations by category">
                    <button type="button" class="picker-chip ${pickerCurrentFilter === 'all' ? 'active' : ''}" data-filter="all">All (${totalMatches})</button>
                    ${state.selectedMuscles.length > 1 && compoundList.length > 0 ? `
                        <button type="button" class="picker-chip ${pickerCurrentFilter === 'compound' ? 'active' : ''}" data-filter="compound">★ Hits Multiple (${compoundList.length})</button>
                    ` : ''}
                    ${state.selectedMuscles.map(m => `
                        <button type="button" class="picker-chip ${pickerCurrentFilter === 'muscle:' + m ? 'active' : ''}" data-filter="muscle:${m}">${m} (${getMuscleCount(m)})</button>
                    `).join("")}
                    <button type="button" class="picker-chip ${pickerCurrentFilter === 'tier:s' ? 'active' : ''}" data-filter="tier:s">S-Tier (${sTierCount})</button>
                </div>
            </div>

            <div class="exercise-grid" id="pickerGrid"></div>
        </div>
    `;

    const closeBtn = document.getElementById("closePickerBtn");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            el.innerHTML = "";
        });
    }

    const searchInput = document.getElementById("pickerSearchInput");
    if (searchInput) {
        searchInput.value = pickerSearchQuery;
        searchInput.addEventListener("input", (e) => {
            pickerSearchQuery = e.target.value;
            updatePickerGrid(scoredList);
        });
    }

    el.querySelectorAll(".picker-chip").forEach(chip => {
        chip.addEventListener("click", () => {
            el.querySelectorAll(".picker-chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            pickerCurrentFilter = chip.dataset.filter;
            updatePickerGrid(scoredList);
        });
    });

    updatePickerGrid(scoredList);
}

function updatePickerGrid(scoredList) {
    const grid = document.getElementById("pickerGrid");
    if (!grid) return;

    const query = pickerSearchQuery.trim().toLowerCase();

    let displayList = scoredList.filter(item => {
        if (pickerCurrentFilter === "compound" && !item.isCompound) return false;
        if (pickerCurrentFilter.startsWith("muscle:")) {
            const m = pickerCurrentFilter.replace("muscle:", "");
            if (!item.matchedMuscles.includes(m)) return false;
        }
        if (pickerCurrentFilter === "tier:s" && item.tier !== "S") return false;

        if (query) {
            const ex = item.exercise;
            const nameMatch = (ex.name || "").toLowerCase().includes(query);
            const primMatch = (ex.primary || "").toLowerCase().includes(query);
            const secMatch = Array.isArray(ex.secondary) && ex.secondary.some(s => s.toLowerCase().includes(query));
            const descMatch = (ex.description || "").toLowerCase().includes(query);
            if (!nameMatch && !primMatch && !secMatch && !descMatch) return false;
        }
        return true;
    });

    if (!displayList.length) {
        grid.innerHTML = `
            <div class="empty" style="grid-column: 1 / -1; padding: 32px 16px; text-align: center;">
                No matching exercises found for "${pickerSearchQuery}". Try clearing your search query or choosing another filter chip.
            </div>
        `;
        return;
    }

    grid.innerHTML = displayList.map(item => {
        return exerciseCardHTML(item.exercise, true, item);
    }).join("");

    attachExerciseButtons();
}


/* =====================================================
   FORM / VIDEO GUIDES
===================================================== */

const FORM_GUIDES = {
    default:{
        tip:"Use controlled reps, keep your core braced, and stop the set if technique breaks down.",
        mistakes:"Avoid bouncing, rushing the eccentric, or using momentum to finish reps.",
        cue:"Controlled tempo · full comfortable range · steady breathing"
    }
};

function getGuide(exercise){
    return FORM_GUIDES[exercise.id] || FORM_GUIDES.default;
}

function videoSearchUrl(exercise){
    return "https://www.youtube.com/results?search_query=" + encodeURIComponent(exercise.name + " proper form tutorial");
}

function tiktokSearchUrl(exercise){
    return "https://www.tiktok.com/search?q=" + encodeURIComponent(exercise.name + " workout form");
}

/* =====================================================
   EXERCISE CARD
===================================================== */

function exerciseCardHTML(
    exercise,
    selectable=false,
    matchInfo=null
){

    const tier = exercise.tier || "A";
    const tierClass = tier === "S" ? "tier-s" : tier === "A" ? "tier-a" : "tier-b";
    const guide = getGuide(exercise);

    const day = DAYS[state.selectedDay];
    const isAlreadyAdded = state.customWorkouts && state.customWorkouts[day] && state.customWorkouts[day].some(x => x.id === exercise.id);

    return `

        <div class="exercise-card ${matchInfo && matchInfo.isCompound ? 'card-compound-hit' : ''}">

            <div class="card-badges-row">
                <span class="badge ${tierClass}">
                    ${tier}-TIER
                </span>

                ${
                    exercise.trending
                    ? `
                    <span class="badge trend-badge">
                        ★ POPULAR
                    </span>
                    `
                    : ""
                }

                ${
                    matchInfo && matchInfo.isCompound
                    ? `
                    <span class="badge match-compound">
                        ★ Hits ${matchInfo.matchedMuscles.join(" & ")}
                    </span>
                    `
                    : matchInfo && matchInfo.primaryHits.length
                    ? `
                    <span class="badge match-primary">
                        Target: ${matchInfo.primaryHits.join(", ")}
                    </span>
                    `
                    : matchInfo && matchInfo.secondaryHits.length
                    ? `
                    <span class="badge match-secondary">
                        Synergy: ${matchInfo.secondaryHits.join(", ")}
                    </span>
                    `
                    : ""
                }
            </div>

            <h3>
                ${exercise.name}
            </h3>

            <div class="exercise-meta">
                ${exercise.scheme}
            </div>

            <div class="badges">

                <span class="badge primary-muscle">
                    ${exercise.primary}
                </span>

                ${
                    Array.isArray(exercise.secondary)
                        ? exercise.secondary
                            .map(
                                muscle=>
                                    `<span class="badge">
                                        ${muscle}
                                    </span>`
                            )
                            .join("")
                        : ""
                }

            </div>

            ${
                exercise.description
                ? `
                <p>${exercise.description}</p>
                `
                : ""
            }

            <div class="form-guide">
                <div class="guide-header">
                    <span class="guide-label">FORM GUIDE</span>
                </div>
                <div class="guide-cue">${guide.cue}</div>
                <div class="guide-tip"><b>Tip:</b> ${guide.tip}</div>
                <div class="guide-mistake"><b>Avoid:</b> ${guide.mistakes}</div>
                <div class="guide-links">
                    <a class="guide-video-btn yt-btn" href="${videoSearchUrl(exercise)}" target="_blank" rel="noopener noreferrer">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
                        <span>YouTube Tutorial</span>
                    </a>
                    <a class="guide-video-btn tt-btn" href="${tiktokSearchUrl(exercise)}" target="_blank" rel="noopener noreferrer">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.59c-1.43 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.74 0 3.19 2.6 5.79 5.79 5.79 3.2 0 5.79-2.59 5.79-5.79V8.51c1.32.94 2.92 1.5 4.66 1.5v-3.2c-1.35 0-2.64-.47-3.8-1z"/></svg>
                        <span>TikTok Cues</span>
                    </a>
                </div>
            </div>

            ${
                selectable
                ? `
                <div class="exercise-actions">

                    <span class="exercise-tier-tag">
                        ${tier}-Tier Movement
                    </span>

                    ${
                        isAlreadyAdded
                        ? `
                        <button
                            class="ghost small added-btn"
                            data-add-exercise="${exercise.id}"
                            disabled
                            type="button"
                        >
                            ✓ In Routine
                        </button>
                        `
                        : `
                        <button
                            class="primary small"
                            data-add-exercise="${exercise.id}"
                            type="button"
                        >
                            + Add To Routine
                        </button>
                        `
                    }

                </div>
                `
                : ""
            }

        </div>

    `;

}


/* =====================================================
   ADD EXERCISE
===================================================== */

function attachExerciseButtons(){

    document
        .querySelectorAll(
            "[data-add-exercise]"
        )
        .forEach(btn=>{

            btn.onclick = () => {

                const exercise =
                    EXERCISES.find(
                        x=>
                            x.id===
                            btn.dataset
                                .addExercise
                    );

                if(!exercise)
                    return;

                const day =
                    DAYS[state.selectedDay];

                const exists =
                    state.customWorkouts[day]
                        .some(
                            x=>
                                x.id===
                                exercise.id
                        );

                if(exists){
                    btn.className = "ghost small added-btn";
                    btn.textContent = "✓ In Routine";
                    btn.disabled = true;
                    return;
                }

                state.customWorkouts[day]
                    .push({
                        id:exercise.id,
                        name:exercise.name,
                        scheme:exercise.scheme,
                        primary:exercise.primary,
                        secondary:exercise.secondary,
                        completed:false
                    });

                saveState();

                renderMyWorkout();

                updateDashboard();

                btn.className = "ghost small added-btn";
                btn.textContent = "✓ In Routine";
                btn.disabled = true;

            };

        });

}


/* =====================================================
   MY WORKOUT
===================================================== */

function renderMyWorkout(){

    const day =
        DAYS[state.selectedDay];

    document
        .getElementById(
            "selectedDayName"
        )
        .textContent=day;

    const el =
        document.getElementById(
            "myWorkoutList"
        );

    const workouts =
        state.customWorkouts[day];

    if(!workouts.length){

        el.innerHTML=`

            <div class="empty">

                No exercises yet.

                Choose a muscle above to build
                your ${day} workout.

            </div>

        `;

        return;

    }

    el.innerHTML =
        workouts.map(
            (workout,i)=>`

            <div
                class="workout-item
                ${workout.completed?"done":""}"
            >

                <div>

                    <div class="exercise-name">
                        ${workout.name}
                    </div>

                    <div class="exercise-muscles">

                        ${workout.scheme}
                        · ${workout.primary}

                        ${
                            workout.secondary.length
                            ? " · "+workout.secondary.join(", ")
                            : ""
                        }

                    </div>

                </div>


                <div
                    style="
                    display:flex;
                    gap:6px;
                    "
                >

                    <button
                        class="ghost small"
                        data-complete="${i}"
                    >
                        ${
                            workout.completed
                            ? "Done ✓"
                            : "Complete"
                        }
                    </button>

                    <button
                        class="ghost small danger"
                        data-remove="${i}"
                    >
                        Remove
                    </button>

                </div>

            </div>

            `
        ).join("");


    el.querySelectorAll(
        "[data-complete]"
    ).forEach(btn=>{

        btn.addEventListener(
            "click",
            ()=>{

                const i =
                    Number(btn.dataset.complete);

                workouts[i].completed =
                    !workouts[i].completed;

                saveState();

                renderMyWorkout();

                updateDashboard();

            }
        );

    });


    el.querySelectorAll(
        "[data-remove]"
    ).forEach(btn=>{

        btn.addEventListener(
            "click",
            ()=>{

                workouts.splice(
                    Number(btn.dataset.remove),
                    1
                );

                saveState();

                renderMyWorkout();

                updateDashboard();

            }
        );

    });

}


/* =====================================================
   BUILT-IN PROGRAM
===================================================== */

function renderBuiltin(){
    const options = document.getElementById("programOptions");
    const description = document.getElementById("programDescription");
    const daysContainer = document.getElementById("builtinDays");
    if(!options || !description || !daysContainer) return;

    const selected = BUILTIN_PROGRAMS.find(program => program.id === selectedBuiltinProgramId) || BUILTIN_PROGRAMS[0];
    selectedBuiltinProgramId = selected.id;

    options.innerHTML = BUILTIN_PROGRAMS.map(program => `
        <button type="button" class="program-option ${program.id === selected.id ? "active" : ""}"
            data-program-id="${program.id}" aria-pressed="${program.id === selected.id}">
            <span class="program-level">${program.level}</span>
            <strong>${program.name}</strong>
            <span>${program.frequency}</span>
        </button>
    `).join("");

    description.innerHTML = `
        <span class="badge primary-muscle">${selected.level}</span>
        <strong>${selected.name}</strong>
        <span>${selected.frequency}</span>
        <p>${selected.description}</p>
    `;

    daysContainer.innerHTML = Object.entries(selected.days).map(([day, data]) => `
        <article class="builtin-day ${data.exercises.length ? "" : "rest-day"}">
            <h3>${day}</h3>
            <div class="focus">${data.focus}</div>
            ${data.exercises.length ? data.exercises.map(([name, scheme]) => `
                <div class="builtin-exercise">
                    <span>${name}</span>
                    <small>${scheme}</small>
                </div>
            `).join("") : `<p class="program-rest-note">Rest and recover. Easy movement is optional.</p>`}
        </article>
    `).join("");

    options.querySelectorAll("[data-program-id]").forEach(button => {
        button.addEventListener("click", () => {
            selectedBuiltinProgramId = button.dataset.programId;
            renderBuiltin();
        });
    });

    const applyButton = document.getElementById("applyBuiltinProgram");
    if(applyButton && !applyButton.dataset.bound){
        applyButton.dataset.bound = "true";
        applyButton.addEventListener("click", applySelectedBuiltinProgram);
    }
}

function applySelectedBuiltinProgram(){
    const program = BUILTIN_PROGRAMS.find(item => item.id === selectedBuiltinProgramId);
    if(!program) return;

    const hasExistingWorkouts = Object.values(state.customWorkouts).some(day => day.length > 0);
    if(hasExistingWorkouts && !confirm(`Replace your current weekly custom routine with "${program.name}"? Your workout and nutrition history will stay unchanged.`)){
        return;
    }

    const nextWorkouts = {};
    for(const day of DAYS){
        const scheduled = program.days[day];
        nextWorkouts[day] = (scheduled?.exercises || []).map(([name, scheme]) => {
            const exercise = EXERCISES.find(item => item.name.toLowerCase() === name.toLowerCase());
            if(!exercise) return null;
            return {
                id:exercise.id,
                name:exercise.name,
                scheme,
                primary:exercise.primary,
                secondary:Array.isArray(exercise.secondary) ? [...exercise.secondary] : [],
                completed:false
            };
        });
        const source = scheduled?.exercises || [];
        if(nextWorkouts[day].some(exercise => !exercise) || nextWorkouts[day].length !== source.length){
            alert(`The "${program.name}" plan includes an exercise that is not available in the exercise library. No changes were made.`);
            return;
        }
    }

    state.customWorkouts = nextWorkouts;
    state.selectedDay = DAYS.findIndex(day => nextWorkouts[day].length > 0);
    state.selectedMuscles = [];
    saveState();
    document.getElementById("customWorkoutView").style.display = "block";
    document.getElementById("builtinWorkoutView").style.display = "none";
    document.querySelectorAll(".mode-btn").forEach(button => {
        const isCustom = button.dataset.mode === "custom";
        button.classList.toggle("active", isCustom);
        button.setAttribute("aria-pressed", String(isCustom));
    });
    renderWorkout();
    updateDashboard();
}


/* =====================================================
   MODE SWITCH
===================================================== */

document
    .querySelectorAll(".mode-btn")
    .forEach(btn=>{

        btn.addEventListener(
            "click",
            ()=>{

                document
                    .querySelectorAll(".mode-btn")
                    .forEach(
                        b=>{
                            b.classList.remove("active");
                            b.setAttribute("aria-pressed", "false");
                        }
                    );

                btn.classList.add("active");
                btn.setAttribute("aria-pressed", "true");

                const custom =
                    btn.dataset.mode==="custom";

                document
                    .getElementById(
                        "customWorkoutView"
                    )
                    .style.display =
                    custom
                    ? "block"
                    : "none";

                document
                    .getElementById(
                        "builtinWorkoutView"
                    )
                    .style.display =
                    custom
                    ? "none"
                    : "block";

            }
        );

    });


/* =====================================================
   EXERCISE LIBRARY
===================================================== */

function renderLibrary(){

    const filterEl =
        document.getElementById("exerciseFilter");
    const filter = filterEl ? filterEl.value : "all";

    const searchEl =
        document.getElementById("exerciseSearch");
    const query = searchEl ? searchEl.value.trim().toLowerCase() : "";

    const exercises =
        EXERCISES.filter(exercise => {
            const matchesMuscle =
                filter === "all" ||
                exerciseMatchesMuscleTarget(exercise, filter);

            if (!matchesMuscle) return false;
            if (!query) return true;

            const nameMatch = (exercise.name || "").toLowerCase().includes(query);
            const primaryMatch = (exercise.primary || "").toLowerCase().includes(query);
            const secMatch = Array.isArray(exercise.secondary) && exercise.secondary.some(s => s.toLowerCase().includes(query));
            const descMatch = (exercise.description || "").toLowerCase().includes(query);
            const tierMatch = (exercise.tier || "").toLowerCase() === query;
            const targetProfile = getExerciseTargetProfile(exercise);
            const profileMatch = targetProfile.primary.some(p => p.toLowerCase().includes(query)) ||
                                 targetProfile.secondary.some(s => s.toLowerCase().includes(query));

            return nameMatch || primaryMatch || secMatch || descMatch || tierMatch || profileMatch;
        });

    const libraryContainer =
        document.getElementById("exerciseLibrary");
    if (!libraryContainer) return;

    if (!exercises.length) {
        libraryContainer.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="empty-icon">🔍</div>
                <h3>No exercises found</h3>
                <p>Try searching for a different term or clear the muscle filter.</p>
            </div>
        `;
        return;
    }

    libraryContainer.innerHTML =
        exercises.map(
            exercise=>
                exerciseCardHTML(
                    exercise,
                    false
                )
        ).join("");

}


/* =====================================================
   FILTER
===================================================== */

function populateFilter(){

    const select =
        document.getElementById(
            "exerciseFilter"
        );

    MUSCLES.forEach(
        muscle=>{

            const option =
                document.createElement(
                    "option"
                );

            option.value=muscle;
            option.textContent=muscle;

            select.appendChild(option);

        }
    );

    select.addEventListener(
        "change",
        renderLibrary
    );

}


/* =====================================================
   TRACKING & RADIAL GAUGE DIAL
===================================================== */

function updateDialGauge(percent){
    const gaugePath = document.getElementById("gaugePath");
    const gaugePercentText = document.getElementById("gaugePercentText");
    const gaugeDot = document.getElementById("gaugeDot");
    const gaugeDotInner = document.getElementById("gaugeDotInner");

    const p = Math.max(0, Math.min(100, Math.round(percent || 0)));
    if (gaugePercentText) {
        gaugePercentText.textContent = `${p}%`;
    }
    if (gaugePath) {
        // Half-circle arc length (R=90) is pi * 90 ~= 282.74
        const offset = 283 - (283 * (p / 100));
        gaugePath.style.strokeDashoffset = offset;
    }
    if (gaugeDot) {
        // Angle ranges from pi (0%) to 0 (100%)
        const rad = (p / 100) * Math.PI;
        const cx = (120 - 90 * Math.cos(rad)).toFixed(2);
        const cy = (120 - 90 * Math.sin(rad)).toFixed(2);
        gaugeDot.setAttribute("cx", cx);
        gaugeDot.setAttribute("cy", cy);
        if (gaugeDotInner) {
            gaugeDotInner.setAttribute("cx", cx);
            gaugeDotInner.setAttribute("cy", cy);
        }
    }
}

window.updateDialGauge = updateDialGauge;

function updateTrackExerciseMetrics(exerciseId){
    const select = document.getElementById("logExercise");
    const targetId = exerciseId || (select ? select.value : "") || (EXERCISES[0] ? EXERCISES[0].id : "");
    if (!targetId) return;

    const exercise = EXERCISES.find(x => x.id === targetId);
    const repsEl = document.getElementById("gaugeDisplayReps");
    const weightEl = document.getElementById("gaugeDisplayWeight");
    const titleEl = document.getElementById("trackExerciseTitle");

    if (exercise) {
        if (repsEl) repsEl.textContent = exercise.scheme || "3 × 10";
        if (titleEl) titleEl.textContent = exercise.name;
    }

    if (weightEl) {
        const pr = state.prs && state.prs[targetId];
        if (pr) {
            weightEl.textContent = `${pr} kg (PR)`;
        } else {
            weightEl.textContent = "No PR yet";
        }
    }
}

window.updateTrackExerciseMetrics = updateTrackExerciseMetrics;

function populateExerciseSelect(){

    const select =
        document.getElementById(
            "logExercise"
        );
    if (!select) return;

    select.innerHTML =
        EXERCISES.map(
            exercise=>`

            <option value="${exercise.id}">
                ${exercise.name}
            </option>

            `
        ).join("");

    updateTrackExerciseMetrics(select.value);

}

function prefillLastLog(exerciseId){
    const previous = [...state.progress]
        .reverse()
        .find(item => item.exerciseId === exerciseId);
    const weightInput = document.getElementById("logWeight");
    const repsInput = document.getElementById("logReps");
    const setsInput = document.getElementById("logSets");
    const rpeInput = document.getElementById("logRpe");

    if(weightInput) weightInput.value = previous ? previous.weight : "";
    if(repsInput) repsInput.value = previous ? previous.reps : "";
    if(setsInput) setsInput.value = previous && previous.sets ? previous.sets : 3;
    if(rpeInput) rpeInput.value = previous && previous.rpe ? previous.rpe : "";
}


/* =====================================================
   LOG LIFT + PR DETECTION
===================================================== */

function localDateKey(date = new Date()){
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return localDate.toISOString().slice(0, 10);
}

function setLogFeedback(message, isError = false){
    const feedback = document.getElementById("logFeedback");
    if(!feedback) return;
    feedback.textContent = message;
    feedback.classList.toggle("error", isError);
    feedback.classList.toggle("success", Boolean(message) && !isError);
}

const liftForm = document.getElementById("liftForm");
if(liftForm){
    liftForm.addEventListener("submit", event => {
        event.preventDefault();

        const exerciseId = document.getElementById("logExercise").value;
        const exercise = EXERCISES.find(item => item.id === exerciseId);
        const weightInput = document.getElementById("logWeight");
        const repsInput = document.getElementById("logReps");
        const setsInput = document.getElementById("logSets");
        const rpeInput = document.getElementById("logRpe");
        const weight = Number(weightInput.value);
        const reps = Number(repsInput.value);
        const sets = Number(setsInput.value);
        const rpe = rpeInput.value === "" ? null : Number(rpeInput.value);

        if(!exercise){
            setLogFeedback("Choose a valid exercise before logging.", true);
            return;
        }
        if(weightInput.value === "" || !Number.isFinite(weight) || weight < 0 ||
            !Number.isInteger(reps) || reps < 1 || reps > 100 ||
            !Number.isInteger(sets) || sets < 1 || sets > 20 ||
            (rpe !== null && (!Number.isFinite(rpe) || rpe < 1 || rpe > 10))){
            setLogFeedback("Check the load, reps, sets, and optional RPE values.", true);
            return;
        }

        const previous = Number(state.prs[exerciseId] || 0);
        const isPR = weight > 0 && weight > previous;
        if(isPR) state.prs[exerciseId] = weight;

        const date = localDateKey();
        state.progress.push({
            date,
            exercise:exercise.name,
            exerciseId,
            weight,
            reps,
            sets,
            rpe,
            volume:weight * reps * sets
        });
        state.trainedDates = [...new Set([...state.trainedDates, date])];

        saveState();
        renderHistory();
        renderStreak();
        updateDashboard();
        updateTrackExerciseMetrics(exerciseId);

        weightInput.value = "";
        repsInput.value = "";
        setsInput.value = "3";
        rpeInput.value = "";
        setLogFeedback(`${sets} working set${sets === 1 ? "" : "s"} logged for ${exercise.name}.`);

        if(isPR) showPR(exercise.name, weight);
    });
}


/* =====================================================
   HISTORY
===================================================== */

function renderHistory(){

    const el =
        document.getElementById(
            "historyTable"
        );
    if(!el) return;

    if(!state.progress.length){

        el.innerHTML=
            `<div class="empty-state">
                <div class="empty-icon">📊</div>
                <h3>No lifts recorded yet</h3>
                <p>Use the form above to log your completed weight and reps to start tracking PRs.</p>
            </div>`;

        return;

    }

    const rows =
        [...state.progress]
            .reverse()
            .slice(0,50)
            .map(
                item=>{
                    const isPr = item.weight > 0 && state.prs[item.exerciseId] === item.weight;
                    const sets = Number(item.sets) > 0 ? Number(item.sets) : 1;
                    const volume = Number(item.volume) || item.weight * item.reps * sets;
                    return `

                <tr>

                    <td class="col-date">
                        ${item.date}
                    </td>

                    <td class="col-exercise">
                        <span>${item.exercise}</span>
                        ${isPr ? `<span class="badge pr-badge">PR</span>` : ""}
                    </td>

                    <td>
                        <span class="reps-chip">${sets} ${sets === 1 ? "set" : "sets"}</span>
                    </td>

                    <td>
                        <span class="metric-chip">${item.weight} kg</span>
                    </td>

                    <td>
                        <span class="reps-chip">${item.reps} reps</span>
                    </td>

                    <td>
                        <span class="metric-chip">${Math.round(volume).toLocaleString()} kg</span>
                    </td>

                    <td>
                        ${item.rpe ? `<span class="reps-chip">${item.rpe}/10</span>` : "—"}
                    </td>

                </tr>

                    `;
                }
            ).join("");

    el.innerHTML=`

        <div class="table-scroll">
            <table class="history-table">

                <thead>

                    <tr>

                        <th>Date</th>
                        <th>Exercise</th>
                        <th>Sets</th>
                        <th>Load</th>
                        <th>Reps</th>
                        <th>Volume</th>
                        <th>RPE</th>

                    </tr>

                </thead>

                <tbody>
                    ${rows}
                </tbody>

            </table>
        </div>

    `;

}

/* =====================================================
   NUTRITION TRACKER
===================================================== */

function escapeHTML(value){
    return String(value).replace(/[&<>"']/g, character => ({
        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        "\"":"&quot;",
        "'":"&#39;"
    })[character]);
}

function currentNutritionDate(){
    return state.nutritionDate || localDateKey();
}

function nutritionValue(value){
    const number = Number(value) || 0;
    return Number.isInteger(number) ? String(number) : number.toFixed(1).replace(/\.0$/, "");
}

function renderNutrition(){
    const dateInput = document.getElementById("nutritionDate");
    const heading = document.getElementById("nutritionLogHeading");
    const summary = document.getElementById("nutritionSummary");
    const mealLog = document.getElementById("nutritionMealLog");
    const recentFoods = document.getElementById("recentFoods");
    if(!dateInput || !summary || !mealLog || !recentFoods) return;

    const date = currentNutritionDate();
    const today = localDateKey();
    dateInput.value = date;
    dateInput.max = today;
    const parsedDate = new Date(`${date}T00:00:00`);
    if(heading){
        heading.textContent = date === today ? "Today's Food Log" : `${parsedDate.toLocaleDateString(undefined, {
            month:"long", day:"numeric", year:"numeric"
        })} Food Log`;
    }

    const entries = state.nutritionEntries.filter(entry => entry.date === date);
    const totals = entries.reduce((result, entry) => {
        result.calories += Number(entry.calories) || 0;
        result.protein += Number(entry.protein) || 0;
        result.carbs += Number(entry.carbs) || 0;
        result.fat += Number(entry.fat) || 0;
        return result;
    }, {calories:0, protein:0, carbs:0, fat:0});

    const targets = state.nutritionGoals;
    const metrics = [
        {key:"calories", label:"Calories", unit:"kcal"},
        {key:"protein", label:"Protein", unit:"g"},
        {key:"carbs", label:"Carbs", unit:"g"},
        {key:"fat", label:"Fat", unit:"g"}
    ];
    summary.innerHTML = metrics.map(metric => {
        const total = totals[metric.key];
        const target = Number(targets[metric.key]) || 0;
        const percent = target > 0 ? Math.min(100, Math.round(total / target * 100)) : 0;
        const remaining = Math.max(0, target - total);
        const overTarget = target > 0 && total > target;
        return `
            <article class="nutrition-metric-card ${metric.key}">
                <div class="nutrition-metric-top">
                    <span>${metric.label}</span>
                    <span>${overTarget ? `${nutritionValue(total - target)} ${metric.unit} over` : `${nutritionValue(remaining)} ${metric.unit} left`}</span>
                </div>
                <div class="nutrition-metric-value">${nutritionValue(total)} <small>/ ${nutritionValue(target)} ${metric.unit}</small></div>
                <div class="nutrition-progress" role="progressbar" aria-label="${metric.label} goal progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}">
                    <span style="width:${percent}%"></span>
                </div>
            </article>
        `;
    }).join("");

    const meals = ["Breakfast", "Lunch", "Dinner", "Snack"];
    mealLog.innerHTML = entries.length ? meals.map(meal => {
        const mealEntries = entries.filter(entry => entry.meal === meal);
        if(!mealEntries.length) return "";
        const mealCalories = mealEntries.reduce((sum, entry) => sum + (Number(entry.calories) || 0), 0);
        return `
            <section class="nutrition-meal-section">
                <div class="nutrition-meal-heading">
                    <h3>${meal}</h3>
                    <span>${nutritionValue(mealCalories)} kcal</span>
                </div>
                ${mealEntries.map(entry => `
                    <article class="nutrition-food-entry">
                        <div class="nutrition-food-name">
                            <strong>${escapeHTML(entry.food)}</strong>
                            ${entry.portion ? `<span>${escapeHTML(entry.portion)}</span>` : ""}
                        </div>
                        <div class="nutrition-food-values">
                            <span>${nutritionValue(entry.calories)} kcal</span>
                            <span>P ${nutritionValue(entry.protein)}g</span>
                            <span>C ${nutritionValue(entry.carbs)}g</span>
                            <span>F ${nutritionValue(entry.fat)}g</span>
                        </div>
                        <button class="ghost small danger" type="button" data-remove-food="${escapeHTML(entry.id)}" aria-label="Remove ${escapeHTML(entry.food)}">Remove</button>
                    </article>
                `).join("")}
            </section>
        `;
    }).join("") : `
        <div class="empty-state">
            <div class="empty-icon" aria-hidden="true">◌</div>
            <h3>No food logged for this day</h3>
            <p>Add a meal above, or repeat a recent food to start your daily log.</p>
        </div>
    `;

    const uniqueRecent = [];
    for(const entry of [...state.nutritionEntries].reverse()){
        const key = [entry.food, entry.portion, entry.calories, entry.protein, entry.carbs, entry.fat].join("|");
        if(!uniqueRecent.some(recent => recent.key === key)){
            uniqueRecent.push({key, entry});
        }
        if(uniqueRecent.length === 6) break;
    }
    recentFoods.innerHTML = uniqueRecent.length ? uniqueRecent.map(({entry}) => `
        <button type="button" class="recent-food-chip" data-repeat-food="${escapeHTML(entry.id)}">
            <strong>${escapeHTML(entry.food)}</strong>
            <span>${nutritionValue(entry.calories)} kcal · ${escapeHTML(entry.portion || "same portion")}</span>
        </button>
    `).join("") : `<p class="sub">Your logged foods will appear here for quick reuse.</p>`;

    const goalsForm = document.getElementById("nutritionGoalsForm");
    if(goalsForm){
        document.getElementById("nutritionCaloriesGoal").value = targets.calories;
        document.getElementById("nutritionProteinGoal").value = targets.protein;
        document.getElementById("nutritionCarbsGoal").value = targets.carbs;
        document.getElementById("nutritionFatGoal").value = targets.fat;
    }

    document.getElementById("nutritionNextDay").disabled = date >= today;
    mealLog.querySelectorAll("[data-remove-food]").forEach(button => {
        button.addEventListener("click", () => {
            state.nutritionEntries = state.nutritionEntries.filter(entry => entry.id !== button.dataset.removeFood);
            saveState();
            renderNutrition();
            setNutritionStatus("Food entry removed.");
        });
    });
    recentFoods.querySelectorAll("[data-repeat-food]").forEach(button => {
        button.addEventListener("click", () => repeatNutritionEntry(button.dataset.repeatFood));
    });
}

function setNutritionStatus(message, isError = false){
    const status = document.getElementById("nutritionStatus");
    if(!status) return;
    status.textContent = message;
    status.classList.toggle("error", isError);
    status.classList.toggle("success", Boolean(message) && !isError);
}

function repeatNutritionEntry(entryId){
    const previous = [...state.nutritionEntries].reverse().find(entry => entry.id === entryId);
    if(!previous) return;
    state.nutritionEntries.push({
        ...previous,
        id:`food-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        date:currentNutritionDate(),
        createdAt:new Date().toISOString()
    });
    saveState();
    renderNutrition();
    setNutritionStatus(`${previous.food} added to ${previous.meal.toLowerCase()}.`);
}

function initializeNutrition(){
    const dateInput = document.getElementById("nutritionDate");
    const goalsForm = document.getElementById("nutritionGoalsForm");
    const foodForm = document.getElementById("foodLogForm");
    if(!dateInput || !goalsForm || !foodForm) return;

    dateInput.value = currentNutritionDate();
    dateInput.max = localDateKey();
    dateInput.addEventListener("change", () => {
        if(!dateInput.value || dateInput.value > localDateKey()){
            dateInput.value = currentNutritionDate();
            setNutritionStatus("Choose today or an earlier date.", true);
            return;
        }
        state.nutritionDate = dateInput.value;
        saveState();
        renderNutrition();
        setNutritionStatus("");
    });
    document.getElementById("nutritionPreviousDay").addEventListener("click", () => {
        const previous = new Date(`${currentNutritionDate()}T00:00:00`);
        previous.setDate(previous.getDate() - 1);
        state.nutritionDate = localDateKey(previous);
        saveState();
        renderNutrition();
    });
    document.getElementById("nutritionNextDay").addEventListener("click", () => {
        const next = new Date(`${currentNutritionDate()}T00:00:00`);
        next.setDate(next.getDate() + 1);
        const nextDate = localDateKey(next);
        if(nextDate > localDateKey()) return;
        state.nutritionDate = nextDate;
        saveState();
        renderNutrition();
    });

    goalsForm.addEventListener("submit", event => {
        event.preventDefault();
        const calories = Number(document.getElementById("nutritionCaloriesGoal").value);
        const protein = Number(document.getElementById("nutritionProteinGoal").value);
        const carbs = Number(document.getElementById("nutritionCarbsGoal").value);
        const fat = Number(document.getElementById("nutritionFatGoal").value);
        if(!Number.isFinite(calories) || calories <= 0 ||
            !Number.isFinite(protein) || protein < 0 ||
            !Number.isFinite(carbs) || carbs < 0 ||
            !Number.isFinite(fat) || fat < 0){
            setNutritionStatus("Enter valid daily nutrition targets.", true);
            return;
        }
        state.nutritionGoals = {calories, protein, carbs, fat};
        saveState();
        renderNutrition();
        setNutritionStatus("Daily targets saved.");
    });

    foodForm.addEventListener("submit", event => {
        event.preventDefault();
        const food = document.getElementById("foodName").value.trim();
        const calories = Number(document.getElementById("foodCalories").value);
        const protein = Number(document.getElementById("foodProtein").value);
        const carbs = Number(document.getElementById("foodCarbs").value);
        const fat = Number(document.getElementById("foodFat").value);
        if(!food || !Number.isFinite(calories) || calories < 0 ||
            !Number.isFinite(protein) || protein < 0 ||
            !Number.isFinite(carbs) || carbs < 0 ||
            !Number.isFinite(fat) || fat < 0){
            setNutritionStatus("Enter a food name and valid non-negative nutrition values.", true);
            return;
        }
        const entry = {
            id:`food-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            date:currentNutritionDate(),
            meal:document.getElementById("foodMeal").value,
            food,
            portion:document.getElementById("foodServing").value.trim(),
            calories,
            protein,
            carbs,
            fat,
            createdAt:new Date().toISOString()
        };
        state.nutritionEntries.push(entry);
        saveState();
        foodForm.reset();
        renderNutrition();
        setNutritionStatus(`${food} added to your food log.`);
    });

    document.getElementById("clearNutritionDay").addEventListener("click", () => {
        const date = currentNutritionDate();
        const entryCount = state.nutritionEntries.filter(entry => entry.date === date).length;
        if(!entryCount || !confirm(`Remove all ${entryCount} food entr${entryCount === 1 ? "y" : "ies"} for this day?`)) return;
        state.nutritionEntries = state.nutritionEntries.filter(entry => entry.date !== date);
        saveState();
        renderNutrition();
        setNutritionStatus("Food log cleared for this day.");
    });

    renderNutrition();
}


/* =====================================================
   STREAK
===================================================== */

function todayKey(){
    return localDateKey();
}


function computeStreak(){

    const dates =
        new Set(
            state.trainedDates
        );

    if(!dates.size)
        return 0;

    let streak=0;

    let date =
        new Date();

    if(
        !dates.has(
            localDateKey(date)
        )
    ){

        date.setDate(
            date.getDate()-1
        );

    }

    while(
        dates.has(
            date.toISOString().slice(0,10)
        )
    ){

        streak++;

        date.setDate(
            date.getDate()-1
        );

    }

    return streak;

}


/* =====================================================
   STREAK UI
===================================================== */

function renderStreak(){

    const streak =
        computeStreak();

    const streakNumEl = document.getElementById("streakNum");
    if(streakNumEl) streakNumEl.textContent=streak;

    const badgeStreakEl = document.getElementById("badgeStreak");
    if(badgeStreakEl){
        badgeStreakEl.textContent =
            streak +
            (streak===1
                ?" day"
                :" days"
            );
    }

    const statStreakEl = document.getElementById("statStreak");
    if(statStreakEl) statStreakEl.textContent=streak;

    const isTrainedToday = state.trainedDates.includes(todayKey());
    const markBtn = document.getElementById("markTodayBtn");
    if(markBtn){
        if(isTrainedToday){
            markBtn.innerHTML = `
                <span>✓ Trained Today</span>
                <span class="btn-arrow-circle" aria-hidden="true" style="background:var(--neon-green); color:#000;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
            `;
            markBtn.classList.add("completed-btn");
        } else {
            markBtn.innerHTML = `
                <span>Mark Today As Trained</span>
                <span class="btn-arrow-circle" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
            `;
            markBtn.classList.remove("completed-btn");
        }
    }

    const grid =
        document.getElementById(
            "weekGrid"
        );
    if(!grid) return;

    const labels=[
        "S","M","T","W","T","F","S"
    ];

    let html="";

    for(
        let i=6;
        i>=0;
        i--
    ){

        const d =
            new Date();

        d.setDate(
            d.getDate()-i
        );

        const key = localDateKey(d);

        const done =
            state.trainedDates
                .includes(key);

        html+=`

            <div
                class="week-grid-pill ${done ? "done" : ""}"
                title="${key}${done ? " - Trained" : ""}"
            >
                <span class="day-letter">${labels[d.getDay()]}</span>
                <span class="pill-dot"></span>
            </div>

        `;

    }

    grid.innerHTML=html;

}


/* =====================================================
   MARK TODAY
===================================================== */

const markTodayEl = document.getElementById("markTodayBtn");
if (markTodayEl) {
    markTodayEl.addEventListener("click", () => {
        const today = todayKey();
        if (!state.trainedDates.includes(today)) {
            state.trainedDates.push(today);
        } else {
            state.trainedDates = state.trainedDates.filter(d => d !== today);
        }
        saveState();
        renderStreak();
        updateDashboard();
    });
}


/* =====================================================
   DAY GOAL
===================================================== */

function renderDayPicker(){

    const el =
        document.getElementById(
            "dayPicker"
        );

    el.innerHTML =
        [1,2,3,4,5,6,7]
            .map(
                n=>`

                <button
                    class="day-btn ${
                        state.trainDaysPerWeek===n
                        ?"active"
                        :""
                    }"
                    data-count="${n}"
                >
                    ${n} Days
                </button>

                `
            ).join("");

    el.querySelectorAll(
        "[data-count]"
    ).forEach(btn=>{

        btn.addEventListener(
            "click",
            ()=>{

                state.trainDaysPerWeek =
                    Number(
                        btn.dataset.count
                    );

                saveState();

                renderDayPicker();
                updateDashboard();

            }
        );

    });

}


/* =====================================================
   QUOTES
===================================================== */

const QUOTES=[

    "You don't need motivation. You need consistency.",

    "One more rep. One more step.",

    "Discipline beats motivation.",

    "The workout you almost skipped can become your best workout.",

    "Your future self is watching what you do today.",

    "Progress is built one session at a time.",

    "Don't chase perfect. Chase better.",

    "Strong body. Strong mind.",

    "You showed up. That's already a win.",

    "Earn your next PR.",

    "When it gets hard, remember why you started.",

    "Small improvements become massive results."

];


function renderQuote(){

    const index =
        new Date().getDate()
        % QUOTES.length;

    document
        .getElementById(
            "dailyQuote"
        )
        .textContent =
        QUOTES[index];

}


/* =====================================================
   PR POPUP
===================================================== */

function showPR(
    exercise,
    weight
){

    document
        .getElementById(
            "prText"
        )
        .textContent =
        `${exercise}: ${weight} kg. You just beat your previous best. Keep going.`;

    document
        .getElementById(
            "overlay"
        )
        .classList.add("show");

    document
        .getElementById(
            "prMessage"
        )
        .classList.add("show");

}


function closePR(){

    document
        .getElementById(
            "overlay"
        )
        .classList.remove("show");

    document
        .getElementById(
            "prMessage"
        )
        .classList.remove("show");

}


/* =====================================================
   DASHBOARD
===================================================== */

function updateDashboard(){

    const workouts =
        new Set(state.progress.map(item => item.date).filter(Boolean)).size;

    const exercises =
        Object.values(
            state.customWorkouts
        )
        .flat()
        .length;

    const prs =
        Object.keys(
            state.prs
        ).length;

    document
        .getElementById(
            "statWorkouts"
        )
        .textContent=workouts;

    document
        .getElementById(
            "statExercises"
        )
        .textContent=exercises;

    document
        .getElementById(
            "statPR"
        )
        .textContent=prs;

    const todayKeyValue = todayKey();
    const weeklyTrainingDays = new Set(
        state.trainedDates.filter(date => {
            const d = new Date(date + "T00:00:00");
            const now = new Date();
            const mondayOffset = (now.getDay() + 6) % 7;
            const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - mondayOffset);
            start.setHours(0, 0, 0, 0);
            const end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 7);
            end.setMilliseconds(-1);
            return d >= start && d <= end;
        })
    );

    const goalDays = Math.min(7, Math.max(1, Number(state.trainDaysPerWeek) || DEFAULT_STATE.trainDaysPerWeek));
    const dailyGoalRemaining = Math.max(0, goalDays - weeklyTrainingDays.size);
    const goalProgressText = document.getElementById("goalProgressText");
    const goalProgressFill = document.getElementById("goalProgressFill");
    const goalProgress = Math.min(100, Math.round(weeklyTrainingDays.size / goalDays * 100));
    if(goalProgressText){
        goalProgressText.textContent = `${Math.min(weeklyTrainingDays.size, goalDays)} / ${goalDays} days`;
    }
    if(goalProgressFill){
        goalProgressFill.style.width = `${goalProgress}%`;
    }
    const momentumHeadline = document.getElementById("momentumHeadline");
    const momentumText = document.getElementById("momentumText");

    if (dailyGoalRemaining > 0) {
        momentumHeadline.textContent = "Stay on schedule.";
        momentumText.textContent = `${dailyGoalRemaining} more training day${dailyGoalRemaining === 1 ? "" : "s"} left this week to hit your goal.`;
    } else {
        momentumHeadline.textContent = "Your plan is in motion.";
        momentumText.textContent = "Weekly goal is locked in. Keep the consistency streak alive.";
    }

    if (state.trainedDates.includes(todayKeyValue)) {
        momentumHeadline.textContent = "Today’s work is complete.";
        momentumText.textContent = "Nice job. Keep the streak alive and stay ready for tomorrow.";
    }


    const jsDay = new Date().getDay();
    const todayName = DAYS[(jsDay + 6) % 7];

    const workout =
        state.customWorkouts[
            todayName
        ] || [];

    const container =
        document.getElementById(
            "todayWorkout"
        );

    const currentStreakVal = computeStreak();
    const quickActiveEl = document.getElementById("quickActiveCount");
    if(quickActiveEl){
        quickActiveEl.textContent = workout.length ? `${workout.length} Exercises` : "Rest Day";
    }

    const quickStreakEl = document.getElementById("quickStreakState");
    if(quickStreakEl){
        quickStreakEl.textContent = `${currentStreakVal} ${currentStreakVal === 1 ? "Day" : "Days"}`;
    }

    if(!workout.length){

        updateDialGauge(0);

        container.innerHTML=`

            <div class="empty">

                No custom workout selected
                for ${todayName}.

                <br><br>

                <button
                    class="primary small"
                    onclick="switchTab('workout')"
                >
                    Build Workout
                </button>

            </div>

        `;

        return;

    }

    const completed =
        workout.filter(
            x=>x.completed
        ).length;

    const percent =
        Math.round(
            completed/workout.length*100
        );

    updateDialGauge(percent);

    container.innerHTML=`

        <div>

            <div class="progress-wrap">

                <div class="progress-top">

                    <span>
                        ${completed}/${workout.length}
                        completed
                    </span>

                    <span>
                        ${percent}%
                    </span>

                </div>

                <div class="progress">

                    <div
                        class="progress-fill"
                        style="width:${percent}%"
                    ></div>

                </div>

            </div>


            <div class="workout-list">

                ${
                    workout.map(
                        (exercise, index)=>`

                        <div
                            class="
                            workout-item
                            ${
                                exercise.completed
                                ?"done"
                                :""
                            }
                            "
                            onclick="toggleDashboardTodayExercise(${index})"
                            style="cursor: pointer;"
                            title="Click to toggle completion"
                        >

                            <div>

                                <div
                                    class="exercise-name"
                                >
                                    ${exercise.name}
                                </div>

                                <div
                                    class="exercise-muscles"
                                >
                                    ${exercise.primary}
                                    · ${exercise.scheme}
                                </div>

                            </div>

                            <span class="workout-check ${exercise.completed ? "checked" : ""}">
                                ${
                                    exercise.completed
                                    ?"✓"
                                    :"○"
                                }
                            </span>

                        </div>

                        `
                    ).join("")
                }

            </div>

        </div>

    `;

}

function toggleDashboardTodayExercise(index){
    const jsDay = new Date().getDay();
    const todayName = DAYS[(jsDay + 6) % 7];
    const workout = state.customWorkouts[todayName] || [];
    if(workout[index]){
        workout[index].completed = !workout[index].completed;
        saveState();
        updateDashboard();
        renderMyWorkout();
    }
}

window.toggleDashboardTodayExercise = toggleDashboardTodayExercise;


/* =====================================================
   WORKOUT RENDER
===================================================== */

function renderWorkout(){
    renderDayTabs();
    renderMuscleSelector();
    renderMyWorkout();
}

function setAuthMessage(message, isError = false){
    const messageElement = document.getElementById("authMessage");
    if(!messageElement) return;
    messageElement.textContent = message;
    messageElement.classList.toggle("error", isError);
}

let authMode = "signin";

function setAuthMode(mode){
    authMode = mode;
    const authTitle = document.getElementById("authTitle");
    const authSubmitButton = document.getElementById("authSubmitButton");
    const signInModeButton = document.getElementById("signInModeButton");
    const signUpModeButton = document.getElementById("signUpModeButton");
    const authPassword = document.getElementById("authPassword");
    const resendConfirmationButton = document.getElementById("resendConfirmationButton");

    if(authTitle) authTitle.textContent = mode === "signup" ? "Create account" : "Sign in";
    if(authSubmitButton) authSubmitButton.textContent = mode === "signup" ? "Create account" : "Sign in";
    if(signInModeButton) signInModeButton.setAttribute("aria-pressed", String(mode === "signin"));
    if(signUpModeButton) signUpModeButton.setAttribute("aria-pressed", String(mode === "signup"));
    if(authPassword) authPassword.autocomplete = mode === "signup" ? "new-password" : "current-password";
    if(resendConfirmationButton) resendConfirmationButton.hidden = true;
    setAuthMessage("");
}

async function handleAuthFormSubmit(event){
    event.preventDefault();

    const emailField = document.getElementById("authEmailInput");
    const passwordField = document.getElementById("authPassword");
    const submitButton = document.getElementById("authSubmitButton");
    if(!emailField || !passwordField || !submitButton) return;

    const email = emailField.value.trim();
    const password = passwordField.value;

    if(!email || !password){
        setAuthMessage("Email and password are required.", true);
        return;
    }

    if(!supabaseClient){
        setAuthMessage("Supabase is not configured. Local mode is active instead.", true);
        return;
    }

    submitButton.disabled = true;
    const resendConfirmationButton = document.getElementById("resendConfirmationButton");
    if(resendConfirmationButton) resendConfirmationButton.hidden = true;
    setAuthMessage(authMode === "signup" ? "Creating your account..." : "Signing in...");

    try{
        const redirectTo = getAuthRedirectUrl();
        const result = authMode === "signup"
            ? await supabaseClient.auth.signUp({
                email,
                password,
                options: { emailRedirectTo: redirectTo }
            })
            : await supabaseClient.auth.signInWithPassword({ email, password });

        if(result.error) throw result.error;

        if(authMode === "signup" && !result.data.session){
            if(resendConfirmationButton) resendConfirmationButton.hidden = false;
            setAuthMessage("Check your email to confirm your account. If the link opens a 404, request a fresh one here.");
            return;
        }

        if(result.data.session?.user){
            document.body.classList.remove("locked-auth");
            document.body.classList.add("authenticated");
            await loadAuthenticatedState(result.data.session.user);
        }else{
            setAuthMessage("Check your email to confirm your account, then sign in.");
        }
    }catch(error){
        const message = error?.message || "Authentication failed.";
        if(error?.code === "email_not_confirmed" || /email.*not confirmed/i.test(message)){
            if(resendConfirmationButton) resendConfirmationButton.hidden = false;
            setAuthMessage("Confirm your email before signing in. You can request a fresh confirmation link below.", true);
        }else{
            setAuthMessage(message, true);
        }
    }finally{
        submitButton.disabled = false;
    }
}

async function resendConfirmationEmail(){
    const emailField = document.getElementById("authEmailInput");
    const resendButton = document.getElementById("resendConfirmationButton");
    const email = emailField?.value.trim();

    if(!email){
        setAuthMessage("Enter your email address first.", true);
        emailField?.focus();
        return;
    }

    if(!supabaseClient){
        setAuthMessage("Supabase is not configured. Please try again later.", true);
        return;
    }

    if(resendButton) resendButton.disabled = true;
    setAuthMessage("Sending a fresh confirmation email...");

    try{
        const { error } = await supabaseClient.auth.resend({
            type: "signup",
            email,
            options: { emailRedirectTo: getAuthRedirectUrl() }
        });

        if(error) throw error;
        setAuthMessage(`A fresh confirmation link was sent to ${email}. Open the newest email to finish signing in.`);
    }catch(error){
        setAuthMessage(error?.message || "Could not resend the confirmation email. Please try again.", true);
    }finally{
        if(resendButton) resendButton.disabled = false;
    }
}

async function loadAuthenticatedState(user){
    currentUser = user;
    state = structuredClone(DEFAULT_STATE);
    setAuthMessage("Loading your account data...");

    const { data, error } = await supabaseClient
        .from("fitness_state")
        .select("state")
        .eq("user_id", user.id)
        .maybeSingle();

    if(error){
        console.error("Could not load fitness data from Supabase.", error);
        const authGate = document.getElementById("authGate");
        if(authGate) authGate.hidden = false;
        document.body.classList.remove("authenticated");
        document.body.classList.add("locked-auth");
        setAuthMessage("Could not load your data. Check the Supabase table and RLS setup.", true);
        return;
    }

    state = normalizeState(data?.state);
    init();

    const authGate = document.getElementById("authGate");
    const authAccount = document.getElementById("authAccount");
    const authAccountEmail = document.getElementById("authAccountEmail");
    if(authGate) authGate.hidden = true;
    if(authAccount) authAccount.hidden = false;
    if(authAccountEmail) authAccountEmail.textContent = user.email || "Signed in";
    document.body.classList.add("authenticated");
}

async function initializeSupabaseAuth(){
    const authForm = document.getElementById("authForm");
    const signInModeButton = document.getElementById("signInModeButton");
    const signUpModeButton = document.getElementById("signUpModeButton");
    const resendConfirmationButton = document.getElementById("resendConfirmationButton");
    const signOutButton = document.getElementById("signOutButton");

    if(authForm) authForm.addEventListener("submit", handleAuthFormSubmit);
    if(signInModeButton) signInModeButton.addEventListener("click", () => setAuthMode("signin"));
    if(signUpModeButton) signUpModeButton.addEventListener("click", () => setAuthMode("signup"));
    if(resendConfirmationButton) resendConfirmationButton.addEventListener("click", resendConfirmationEmail);
    if(signOutButton) signOutButton.addEventListener("click", async () => {
        if(!supabaseClient) {
            window.location.reload();
            return;
        }

        const { error } = await supabaseClient.auth.signOut();
        if(error){
            setAuthMessage("Could not sign out. Please try again.", true);
            return;
        }
        window.location.reload();
    });

    let hasSupabaseConfig = false;
    try{
        let config = window.YAO_SUPABASE_CONFIG;
        if(!config?.url && !config?.anonKey && !isGitHubPages()){
            const configResponse = await fetch("/api/config", { cache: "no-store" });
            if(!configResponse.ok) throw new Error("Could not load backend configuration.");
            config = await configResponse.json();
        }

        hasSupabaseConfig = Boolean(config?.url || config?.anonKey || config?.configured);
        if(!config?.url || !config?.anonKey){
            if(hasSupabaseConfig) throw new Error("Supabase URL and public anon key are both required.");
            if(isGitHubPages()){
                const accountButton = document.getElementById("openAuthModalBtn");
                const tagline = document.querySelector(".tagline");
                if(accountButton) accountButton.remove();
                if(tagline) tagline.textContent = "Free web edition · Your workouts and food logs are saved in this browser only.";
            }
            loadInitialState();
            return;
        }

        if(!window.supabase?.createClient) {
            throw new Error("Supabase client library did not load.");
        }

        hasSupabaseConfig = true;
        supabaseClient = window.supabase.createClient(config.url, config.anonKey);
        const { data, error } = await supabaseClient.auth.getSession();
        if(error) throw error;

        if(data.session?.user){
            document.body.classList.remove("locked-auth");
            document.body.classList.add("authenticated");
            await loadAuthenticatedState(data.session.user);
            return;
        }

        const authGate = document.getElementById("authGate");
        if(authGate) {
            authGate.hidden = false;
        }
        document.body.classList.remove("authenticated");
        document.body.classList.add("locked-auth");
        setAuthMessage("Sign in to access your personal training data.");
    }catch(error){
        const authGate = document.getElementById("authGate");
        if(hasSupabaseConfig){
            console.error("Could not initialize Supabase.", error);
            if(authGate) authGate.hidden = false;
            document.body.classList.remove("authenticated");
            document.body.classList.add("locked-auth");
            setAuthMessage("Cloud backend connection failed. Check the Supabase URL, public key, and site settings, then reload.", true);
        }else{
            console.warn("Supabase is unavailable, using local mode.", error);
            if(authGate) authGate.hidden = true;
            document.body.classList.remove("locked-auth");
            document.body.classList.add("authenticated");
            loadInitialState();
        }
    }
}

function initializeApplication(){
    const authGate = document.getElementById("authGate");
    if(authGate){
        initializeSupabaseAuth();
        return;
    }

    loadInitialState();
}

/* =====================================================
   INIT
===================================================== */

function init(){

    const overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.addEventListener("click", closePR);
    }

    const searchInput = document.getElementById("exerciseSearch");
    if (searchInput) {
        searchInput.addEventListener("input", renderLibrary);
    }

    const logExerciseSelect = document.getElementById("logExercise");
    if (logExerciseSelect) {
        logExerciseSelect.addEventListener("change", (e) => {
            const exerciseId = e.target.value;
            updateTrackExerciseMetrics(exerciseId);
            prefillLastLog(exerciseId);
            setLogFeedback("");
        });
    }

    const clearHistoryButton = document.getElementById("clearHistoryBtn");
    if(clearHistoryButton){
        clearHistoryButton.addEventListener("click", () => {
            if(!state.progress.length && !state.trainedDates.length) return;
            if(!confirm("Clear all lift history, personal records, and recorded training days?")) return;
            state.progress = [];
            state.prs = {};
            state.trainedDates = [];
            saveState();
            renderHistory();
            renderStreak();
            updateTrackExerciseMetrics();
            updateDashboard();
            setLogFeedback("Training history cleared.");
        });
    }

    const authGateEl = document.getElementById("authGate");
    if (authGateEl) {
        authGateEl.addEventListener("click", (e) => {
            if (e.target === authGateEl && !document.body.classList.contains("locked-auth")) {
                authGateEl.hidden = true;
            }
        });
    }

    const clearMusclesBtn = document.getElementById("clearMusclesBtn");
    if (clearMusclesBtn) {
        clearMusclesBtn.addEventListener("click", () => {
            state.selectedMuscles = [];
            renderMuscleSelector();
            const picker = document.getElementById("exercisePicker");
            if (picker) picker.innerHTML = "";
        });
    }

    renderWorkout();

    renderBuiltin();

    populateFilter();

    renderLibrary();

    populateExerciseSelect();

    updateTrackExerciseMetrics();

    renderHistory();

    renderStreak();

    renderDayPicker();

    renderQuote();

    updateDashboard();

    initializeNutrition();

}

/* ============================================================
   YAO FITNESS — ORGANIZED EXERCISE EXPANSION
   Categories: Chest, Back, Shoulders, Arms, Legs, Glutes,
   Core, Calves, Conditioning, and Athletic.
   ============================================================ */
const YAO_EXTRA_EXERCISES = [
  // CHEST
  ["Incline Dumbbell Press","S","3 x 8-12","Chest","Front Delts; Triceps","Control the descent and keep shoulder blades pinned.","Do not flare elbows or bounce the dumbbells.","https://www.youtube.com/results?search_query=incline+dumbbell+press+proper+form"],
  ["Flat Dumbbell Press","A","3 x 8-12","Chest","Triceps; Front Delts","Keep wrists stacked over elbows and drive evenly.","Avoid excessive arching or letting elbows collapse.","https://www.youtube.com/results?search_query=flat+dumbbell+press+proper+form"],
  ["Decline Machine Press","A","3 x 10-12","Lower Chest","Triceps; Front Delts","Press through a comfortable range without locking hard.","Do not shorten the range just to use more weight.","https://www.youtube.com/results?search_query=decline+machine+press+proper+form"],
  ["Cable Chest Press","A","3 x 10-15","Chest","Triceps; Front Delts","Keep a stable stance and squeeze at the finish.","Do not rotate your torso to move heavier weight.","https://www.youtube.com/results?search_query=cable+chest+press+proper+form"],
  ["Pec Deck Fly","S","3 x 10-15","Chest","Front Delts","Keep a slight elbow bend and bring arms together smoothly.","Do not slam the handles together.","https://www.youtube.com/results?search_query=pec+deck+fly+proper+form"],
  ["Cable Crossover","S","3 x 12-15","Chest","Front Delts","Use a controlled stretch and squeeze the chest.","Do not turn it into a standing press.","https://www.youtube.com/results?search_query=cable+crossover+proper+form"],
  ["Chest-Supported Push-Up","A","3 x 10-20","Chest","Triceps; Core","Keep your body straight and control every rep.","Do not let hips sag.","https://www.youtube.com/results?search_query=push+up+proper+form"],

  // BACK
  ["Chest-Supported Dumbbell Row","S","3 x 8-12","Upper Back","Lats; Rear Delts; Biceps","Pull elbows toward your hips and pause at the top.","Do not shrug or jerk the dumbbells.","https://www.youtube.com/results?search_query=chest+supported+dumbbell+row+proper+form"],
  ["Dumbbell Pullover","A","3 x 10-15","Lats","Chest; Serratus","Keep ribs controlled and reach into a comfortable stretch.","Do not overextend the shoulders.","https://www.youtube.com/results?search_query=dumbbell+pullover+proper+form"],
  ["Neutral-Grip Lat Pulldown","S","3 x 8-12","Lats","Biceps; Upper Back","Drive elbows down and keep your chest tall.","Do not swing backward to move the weight.","https://www.youtube.com/results?search_query=neutral+grip+lat+pulldown+proper+form"],
  ["Close-Grip Seated Cable Row","A","3 x 8-12","Mid Back","Lats; Biceps","Pull toward your lower ribs and control the return.","Do not round aggressively through the spine.","https://www.youtube.com/results?search_query=close+grip+seated+cable+row+proper+form"],
  ["Wide-Grip Cable Row","A","3 x 10-12","Upper Back","Rear Delts; Lats","Keep elbows slightly out and squeeze between shoulder blades.","Do not overextend your lower back.","https://www.youtube.com/results?search_query=wide+grip+cable+row+proper+form"],
  ["Machine Pullover","S","3 x 10-15","Lats","Serratus; Triceps","Move from the shoulder and keep your torso stable.","Do not use momentum.","https://www.youtube.com/results?search_query=machine+pullover+proper+form"],
  ["Reverse-Grip Lat Pulldown","A","3 x 8-12","Lats","Biceps; Upper Back","Keep elbows close and pull toward upper chest.","Do not lean excessively backward.","https://www.youtube.com/results?search_query=reverse+grip+lat+pulldown+proper+form"],

  // SHOULDERS
  ["Cable Y-Raise","S","3 x 12-15","Side Delts","Rear Delts; Upper Back","Use light resistance and raise in a controlled Y path.","Do not shrug toward your ears.","https://www.youtube.com/results?search_query=cable+y+raise+proper+form"],
  ["Dumbbell Front Raise","A","3 x 10-15","Front Delts","Upper Chest","Raise only to a comfortable shoulder height.","Do not swing the dumbbells.","https://www.youtube.com/results?search_query=dumbbell+front+raise+proper+form"],
  ["Rear Delt Cable Fly","S","3 x 12-15","Rear Delts","Upper Back","Lead with the elbows and keep tension throughout.","Do not turn it into a row.","https://www.youtube.com/results?search_query=rear+delt+cable+fly+proper+form"],
  ["Machine Shoulder Press","S","3 x 8-12","Front Delts","Side Delts; Triceps","Keep your back supported and press smoothly.","Do not force an uncomfortable bottom position.","https://www.youtube.com/results?search_query=machine+shoulder+press+proper+form"],
  ["Dumbbell Lean-Away Lateral Raise","S","3 x 10-15","Side Delts","Upper Traps","Use a small lean to increase tension through the range.","Do not swing the dumbbell.","https://www.youtube.com/results?search_query=lean+away+lateral+raise+proper+form"],

  // ARMS
  ["Incline Dumbbell Curl","S","3 x 8-12","Biceps","Brachialis; Forearms","Keep upper arms behind the torso and curl without swinging.","Do not let shoulders roll forward.","https://www.youtube.com/results?search_query=incline+dumbbell+curl+proper+form"],
  ["Cable Preacher Curl","S","3 x 10-15","Biceps","Brachialis; Forearms","Keep the upper arm planted and squeeze at the top.","Do not lift the elbow from the pad.","https://www.youtube.com/results?search_query=cable+preacher+curl+proper+form"],
  ["Reverse Cable Curl","A","3 x 10-15","Brachialis","Forearms; Biceps","Keep wrists neutral and curl under control.","Do not bend the wrists to finish reps.","https://www.youtube.com/results?search_query=reverse+cable+curl+proper+form"],
  ["Cable Triceps Kickback","A","3 x 12-15","Triceps","Rear Delts","Lock the upper arm and extend only at the elbow.","Do not swing the shoulder.","https://www.youtube.com/results?search_query=cable+triceps+kickback+proper+form"],
  ["Single-Arm Overhead Cable Extension","S","3 x 10-15","Triceps","Long Head Triceps","Keep the elbow pointed forward and move smoothly.","Do not flare the elbow excessively.","https://www.youtube.com/results?search_query=single+arm+overhead+cable+extension+proper+form"],
  ["Close-Grip Push-Up","A","3 x 8-20","Triceps","Chest; Front Delts","Keep elbows relatively close to your body.","Do not let hips sag.","https://www.youtube.com/results?search_query=close+grip+push+up+proper+form"],

  // LEGS / GLUTES
  ["Front Squat","S","3 x 5-10","Quads","Glutes; Core","Keep your torso tall and knees tracking over toes.","Do not collapse the chest or knees inward.","https://www.youtube.com/results?search_query=front+squat+proper+form"],
  ["Belt Squat","S","3 x 8-15","Quads","Glutes","Sit down between your hips and drive through the floor.","Do not rush the bottom position.","https://www.youtube.com/results?search_query=belt+squat+proper+form"],
  ["Pendulum Squat","S","3 x 8-12","Quads","Glutes","Control the bottom and keep your feet planted.","Do not bounce out of the bottom.","https://www.youtube.com/results?search_query=pendulum+squat+proper+form"],
  ["Leg Extension","A","3 x 10-15","Quads","—","Align your knee with the machine pivot and squeeze at the top.","Do not kick the weight explosively.","https://www.youtube.com/results?search_query=leg+extension+proper+form"],
  ["Single-Leg Leg Press","A","3 x 8-12","Quads","Glutes; Hamstrings","Keep your pelvis stable and control the platform.","Do not allow the knee to collapse inward.","https://www.youtube.com/results?search_query=single+leg+leg+press+proper+form"],
  ["Dumbbell Bulgarian Split Squat","S","3 x 8-12","Quads","Glutes; Hamstrings","Keep the front foot planted and descend under control.","Do not bounce off the rear leg.","https://www.youtube.com/results?search_query=dumbbell+bulgarian+split+squat+proper+form"],
  ["Reverse Lunge","A","3 x 8-12","Glutes","Quads; Hamstrings","Step backward and lower vertically.","Do not let the front knee cave inward.","https://www.youtube.com/results?search_query=reverse+lunge+proper+form"],
  ["Dumbbell Step-Up","A","3 x 8-12","Glutes","Quads; Hamstrings","Drive through the working leg rather than jumping off the back foot.","Do not push excessively from the trailing leg.","https://www.youtube.com/results?search_query=dumbbell+step+up+proper+form"],
  ["Cable Pull-Through","S","3 x 10-15","Glutes","Hamstrings; Core","Hinge at the hips and squeeze the glutes at lockout.","Do not squat the movement.","https://www.youtube.com/results?search_query=cable+pull+through+proper+form"],
  ["Barbell Good Morning","A","3 x 8-12","Hamstrings","Glutes; Lower Back","Use a controlled hip hinge with a neutral spine.","Do not use excessive weight or round the back.","https://www.youtube.com/results?search_query=barbell+good+morning+proper+form"],
  ["Nordic Hamstring Curl","S","3 x 5-8","Hamstrings","Glutes; Calves","Lower slowly and use assistance as needed.","Do not drop uncontrollably.","https://www.youtube.com/results?search_query=nordic+hamstring+curl+proper+form"],

  // CALVES
  ["Leg Press Calf Raise","A","4 x 10-20","Calves","Soleus; Gastrocnemius","Use a full stretch and controlled squeeze.","Do not bounce at the bottom.","https://www.youtube.com/results?search_query=leg+press+calf+raise+proper+form"],
  ["Donkey Calf Raise","S","4 x 10-20","Gastrocnemius","Soleus","Keep the knees mostly extended and use a full range.","Do not rush reps.","https://www.youtube.com/results?search_query=donkey+calf+raise+proper+form"],
  ["Single-Leg Seated Calf Raise","A","3 x 12-20","Soleus","Calves","Keep the knee stable and move through the ankle.","Do not roll the ankle outward.","https://www.youtube.com/results?search_query=single+leg+seated+calf+raise+proper+form"],

  // CORE
  ["Ab Wheel Rollout","S","3 x 6-12","Abs","Obliques; Lats","Brace hard and extend only as far as you can control.","Do not let the lower back sag.","https://www.youtube.com/results?search_query=ab+wheel+rollout+proper+form"],
  ["Cable Crunch","S","3 x 10-15","Abs","Obliques","Curl the ribcage toward the pelvis rather than pulling with the arms.","Do not simply hinge at the hips.","https://www.youtube.com/results?search_query=cable+crunch+proper+form"],
  ["Decline Sit-Up","A","3 x 10-15","Abs","Hip Flexors","Curl the torso smoothly and avoid yanking the neck.","Do not use momentum.","https://www.youtube.com/results?search_query=decline+sit+up+proper+form"],
  ["Pallof Press","S","3 x 10-15","Core","Obliques; Glutes","Resist rotation and keep ribs stacked over pelvis.","Do not rotate toward the cable.","https://www.youtube.com/results?search_query=pallof+press+proper+form"],
  ["Hollow Body Hold","S","3 x 20-40 sec","Abs","Hip Flexors; Core","Press the lower back toward the floor and breathe behind the brace.","Do not arch your lower back.","https://www.youtube.com/results?search_query=hollow+body+hold+proper+form"],

  // CONDITIONING / ATHLETIC
  ["Sled Drag","S","4 x 20-40 m","Legs","Glutes; Calves; Core","Stay braced and take controlled steps.","Do not lean excessively or lose footing.","https://www.youtube.com/results?search_query=sled+drag+proper+form"],
  ["Farmer Walk","S","3 x 20-40 m","Grip","Traps; Core; Legs","Walk tall with shoulders packed and a firm grip.","Do not lean side to side.","https://www.youtube.com/results?search_query=farmer+walk+proper+form"],
  ["Battle Rope Waves","A","5 x 20-30 sec","Conditioning","Shoulders; Core","Keep a strong stance and create steady rope waves.","Do not bounce your entire body.","https://www.youtube.com/results?search_query=battle+rope+waves+proper+form"],
  ["Box Jump","S","3 x 5-8","Explosive Legs","Glutes; Quads; Calves","Land softly with knees tracking over toes.","Do not jump to a height you cannot safely control.","https://www.youtube.com/results?search_query=box+jump+proper+form"],
  ["Kettlebell Swing","S","3 x 12-20","Glutes","Hamstrings; Core; Shoulders","Drive the bell with the hips and keep the spine neutral.","Do not turn it into a squat or lift with the arms.","https://www.youtube.com/results?search_query=kettlebell+swing+proper+form"],

  // ──────────────────────────────────────────────
  // ADDITIONAL CHEST
  // ──────────────────────────────────────────────
  ["Landmine Press","A","3 x 10-12","Chest","Front Delts; Triceps","Press at an angle and squeeze at the top.","Do not overextend your lower back.","https://www.youtube.com/results?search_query=landmine+press+proper+form"],
  ["Svend Press","B","3 x 12-15","Chest","Front Delts","Squeeze the plates together hard throughout the press.","Do not lose the squeeze.","https://www.youtube.com/results?search_query=svend+press+proper+form"],
  ["Machine Chest Fly","A","3 x 10-15","Chest","Front Delts","Keep a slight bend in the elbows and bring handles together smoothly.","Do not slam the weight.","https://www.youtube.com/results?search_query=machine+chest+fly+proper+form"],
  ["Incline Cable Fly","S","3 x 12-15","Upper Chest","Front Delts","Set the bench to 30-45° and cross cables at the top.","Do not use too much weight and lose control.","https://www.youtube.com/results?search_query=incline+cable+fly+proper+form"],
  ["Deficit Push-Up","A","3 x 8-15","Chest","Triceps; Core; Front Delts","Place hands on elevated surfaces and descend deep.","Do not let your hips sag.","https://www.youtube.com/results?search_query=deficit+push+up+proper+form"],
  ["Decline Barbell Bench Press","S","3 x 6-10","Lower Chest","Triceps; Front Delts","Secure feet and control the bar to the lower chest.","Do not bounce the bar off the chest.","https://www.youtube.com/results?search_query=decline+barbell+bench+press+proper+form"],

  // ──────────────────────────────────────────────
  // ADDITIONAL BACK
  // ──────────────────────────────────────────────
  ["T-Bar Row","S","4 x 6-10","Mid Back","Lats; Biceps; Rear Delts","Keep chest on the pad and pull explosively.","Do not round your lower back.","https://www.youtube.com/results?search_query=t+bar+row+proper+form"],
  ["Pendlay Row","S","4 x 5-8","Upper Back","Lats; Biceps; Core","Pull from a dead stop each rep with a flat back.","Do not use body English.","https://www.youtube.com/results?search_query=pendlay+row+proper+form"],
  ["Single-Arm Dumbbell Row","S","3 x 8-12","Lats","Upper Back; Biceps; Core","Drive elbow past your hip and control the negative.","Do not rotate your torso excessively.","https://www.youtube.com/results?search_query=single+arm+dumbbell+row+proper+form"],
  ["Meadows Row","A","3 x 8-12","Lats","Upper Back; Rear Delts","Stagger your stance and pull toward your hip.","Do not jerk the weight.","https://www.youtube.com/results?search_query=meadows+row+proper+form"],
  ["Chin-Up","S","3 x 6-12","Lats","Biceps; Core","Use a supinated grip and pull chin over the bar.","Do not kip or swing.","https://www.youtube.com/results?search_query=chin+up+proper+form"],
  ["Inverted Row","A","3 x 8-15","Upper Back","Lats; Biceps; Core","Keep your body in a straight line and pull chest to bar.","Do not let your hips sag.","https://www.youtube.com/results?search_query=inverted+row+proper+form"],
  ["Rack Pull","S","3 x 5-8","Upper Back","Traps; Glutes; Hamstrings","Set pins at knee height and lock out aggressively.","Do not hyperextend your lower back.","https://www.youtube.com/results?search_query=rack+pull+proper+form"],
  ["Straight-Arm Pulldown","A","3 x 12-15","Lats","Serratus; Core","Keep arms straight and pull the bar to your thighs.","Do not bend the elbows to cheat.","https://www.youtube.com/results?search_query=straight+arm+pulldown+proper+form"],
  ["Snatch-Grip Deadlift","S","3 x 5-8","Upper Back","Lats; Hamstrings; Glutes","Use a wide grip and maintain a neutral spine throughout.","Do not round the upper back under load.","https://www.youtube.com/results?search_query=snatch+grip+deadlift+proper+form"],

  // ──────────────────────────────────────────────
  // ADDITIONAL SHOULDERS
  // ──────────────────────────────────────────────
  ["Arnold Press","S","3 x 8-12","Front Delts","Side Delts; Triceps","Rotate palms from facing you to facing forward as you press.","Do not rush the rotation.","https://www.youtube.com/results?search_query=arnold+press+proper+form"],
  ["Z Press","S","3 x 6-10","Front Delts","Side Delts; Core","Sit on the floor with legs extended and press overhead.","Do not lean back or use leg drive.","https://www.youtube.com/results?search_query=z+press+proper+form"],
  ["Cable Lateral Raise","S","3 x 12-15","Side Delts","Upper Traps","Stand side-on to the cable and raise to shoulder height.","Do not shrug your shoulder.","https://www.youtube.com/results?search_query=cable+lateral+raise+proper+form"],
  ["Behind-the-Neck Press","A","3 x 8-12","Front Delts","Side Delts; Triceps","Use a Smith machine or moderate load for safety.","Do not go below ear level if you lack shoulder mobility.","https://www.youtube.com/results?search_query=behind+the+neck+press+proper+form"],
  ["Lu Raise","A","3 x 10-15","Front Delts","Side Delts","Raise dumbbells in a Y-path with thumbs up.","Do not use momentum or shrug.","https://www.youtube.com/results?search_query=lu+raise+proper+form"],
  ["Reverse Pec Deck","S","3 x 12-15","Rear Delts","Upper Back","Keep arms nearly straight and squeeze the rear delts.","Do not use excessive weight.","https://www.youtube.com/results?search_query=reverse+pec+deck+proper+form"],
  ["Barbell Upright Row","A","3 x 8-12","Side Delts","Traps; Biceps","Pull to upper chest with elbows leading.","Do not pull higher than comfortable for your shoulders.","https://www.youtube.com/results?search_query=barbell+upright+row+proper+form"],
  ["Dumbbell Shrug","A","3 x 12-15","Traps","Upper Back","Elevate straight up and hold for 1-2 seconds.","Do not roll the shoulders.","https://www.youtube.com/results?search_query=dumbbell+shrug+proper+form"],
  ["Barbell Shrug","S","4 x 8-12","Traps","Upper Back","Use straps if needed and squeeze at the top.","Do not bend your elbows.","https://www.youtube.com/results?search_query=barbell+shrug+proper+form"],

  // ──────────────────────────────────────────────
  // ADDITIONAL ARMS
  // ──────────────────────────────────────────────
  ["Spider Curl","S","3 x 10-12","Biceps","Brachialis","Lie face down on an incline bench and curl.","Do not swing your body.","https://www.youtube.com/results?search_query=spider+curl+proper+form"],
  ["Concentration Curl","A","3 x 10-15","Biceps","Brachialis","Brace your elbow against your inner thigh and curl.","Do not swing your shoulder.","https://www.youtube.com/results?search_query=concentration+curl+proper+form"],
  ["EZ-Bar Curl","S","3 x 8-12","Biceps","Forearms","Use the angled grip to reduce wrist strain.","Do not rock your body.","https://www.youtube.com/results?search_query=ez+bar+curl+proper+form"],
  ["Cable Bayesian Curl","S","3 x 10-15","Biceps","Brachialis","Stand facing away from the cable with your arm behind you.","Do not let your elbow drift forward.","https://www.youtube.com/results?search_query=bayesian+curl+proper+form"],
  ["Zottman Curl","A","3 x 8-12","Biceps","Forearms; Brachialis","Curl up supinated, rotate, and lower pronated.","Do not rush the rotation.","https://www.youtube.com/results?search_query=zottman+curl+proper+form"],
  ["Dumbbell Kickback","A","3 x 10-15","Triceps","—","Lock the upper arm and extend fully.","Do not swing your shoulder.","https://www.youtube.com/results?search_query=dumbbell+kickback+proper+form"],
  ["Diamond Push-Up","A","3 x 8-20","Triceps","Chest; Core","Place hands in a diamond shape and lower your chest.","Do not flare elbows wide.","https://www.youtube.com/results?search_query=diamond+push+up+proper+form"],
  ["Dips (Triceps Focus)","S","3 x 8-12","Triceps","Chest; Front Delts","Keep torso upright and elbows close to your sides.","Do not go deeper than comfortable.","https://www.youtube.com/results?search_query=triceps+dips+proper+form"],
  ["JM Press","S","3 x 6-10","Triceps","Chest","Lower the bar to chin level with elbows forward, then press.","Do not let it become a standard bench press.","https://www.youtube.com/results?search_query=jm+press+proper+form"],
  ["Reverse Grip Pushdown","A","3 x 10-15","Triceps","Forearms","Use an underhand grip on the cable bar and extend.","Do not let your elbows flare.","https://www.youtube.com/results?search_query=reverse+grip+pushdown+proper+form"],
  ["Wrist Roller","A","3 x 2-4 rolls","Forearms","Grip","Roll the weight up and down slowly.","Do not use momentum.","https://www.youtube.com/results?search_query=wrist+roller+proper+form"],
  ["Reverse Wrist Curl","A","3 x 12-20","Forearms","Grip","Rest forearms on a bench and curl with palms down.","Do not use excessive weight.","https://www.youtube.com/results?search_query=reverse+wrist+curl+proper+form"],
  ["Plate Pinch Hold","A","3 x 20-40 sec","Grip","Forearms","Pinch two plates together and hold.","Do not drop them on your feet.","https://www.youtube.com/results?search_query=plate+pinch+hold+proper+form"],

  // ──────────────────────────────────────────────
  // ADDITIONAL LEGS
  // ──────────────────────────────────────────────
  ["Hack Squat","S","3 x 8-12","Quads","Glutes; Hamstrings","Keep feet shoulder-width and descend to parallel.","Do not let your knees cave inward.","https://www.youtube.com/results?search_query=hack+squat+proper+form"],
  ["Sissy Squat","A","3 x 8-15","Quads","Core","Lean back and bend the knees while staying on your toes.","Do not hyperextend your lower back.","https://www.youtube.com/results?search_query=sissy+squat+proper+form"],
  ["Goblet Squat","A","3 x 10-15","Quads","Glutes; Core","Hold a dumbbell at chest height and squat deep.","Do not round your back.","https://www.youtube.com/results?search_query=goblet+squat+proper+form"],
  ["Sumo Deadlift","S","4 x 4-8","Glutes","Quads; Hamstrings; Core","Take a wide stance and grip inside your knees.","Do not let your knees cave.","https://www.youtube.com/results?search_query=sumo+deadlift+proper+form"],
  ["Trap Bar Deadlift","S","4 x 5-8","Quads","Glutes; Hamstrings; Core","Stand centered and drive through the floor.","Do not round your spine.","https://www.youtube.com/results?search_query=trap+bar+deadlift+proper+form"],
  ["Zercher Squat","A","3 x 6-10","Quads","Glutes; Core; Upper Back","Cradle the bar in your elbows and squat.","Do not round your upper back.","https://www.youtube.com/results?search_query=zercher+squat+proper+form"],
  ["Lying Leg Curl","S","3 x 10-15","Hamstrings","Calves","Keep hips pressed into the pad and curl smoothly.","Do not lift your hips off the pad.","https://www.youtube.com/results?search_query=lying+leg+curl+proper+form"],
  ["Seated Leg Curl","A","3 x 10-15","Hamstrings","Calves","Adjust the machine and curl through a full range.","Do not use momentum.","https://www.youtube.com/results?search_query=seated+leg+curl+proper+form"],
  ["Stiff-Leg Deadlift","S","3 x 8-12","Hamstrings","Glutes; Lower Back","Keep a slight knee bend and hinge at the hips.","Do not round your back.","https://www.youtube.com/results?search_query=stiff+leg+deadlift+proper+form"],
  ["Single-Leg Romanian Deadlift","A","3 x 8-12","Hamstrings","Glutes; Core","Hinge forward on one leg with a flat back.","Do not rotate your hips open.","https://www.youtube.com/results?search_query=single+leg+romanian+deadlift+proper+form"],
  ["Lateral Lunge","A","3 x 8-12","Quads","Glutes; Adductors","Step wide to the side and sit back into the hip.","Do not let the knee go past your toes.","https://www.youtube.com/results?search_query=lateral+lunge+proper+form"],
  ["Curtsy Lunge","A","3 x 10-12","Glutes","Quads; Adductors","Step diagonally behind and lower the back knee.","Do not let the front knee collapse inward.","https://www.youtube.com/results?search_query=curtsy+lunge+proper+form"],
  ["Glute Bridge","A","3 x 12-15","Glutes","Hamstrings; Core","Drive through your heels and squeeze the glutes at the top.","Do not hyperextend your lower back.","https://www.youtube.com/results?search_query=glute+bridge+proper+form"],
  ["Glute-Ham Raise","S","3 x 6-10","Hamstrings","Glutes; Core","Use the GHD and control the eccentric.","Do not dive headfirst.","https://www.youtube.com/results?search_query=glute+ham+raise+proper+form"],
  ["Adductor Machine","A","3 x 12-15","Adductors","—","Squeeze inward smoothly and control the return.","Do not slam the weight.","https://www.youtube.com/results?search_query=adductor+machine+proper+form"],
  ["Abductor Machine","A","3 x 12-15","Glutes","—","Press outward and hold briefly at the widest point.","Do not use momentum.","https://www.youtube.com/results?search_query=abductor+machine+proper+form"],

  // ──────────────────────────────────────────────
  // ADDITIONAL CALVES
  // ──────────────────────────────────────────────
  ["Seated Calf Raise","S","4 x 12-20","Soleus","Gastrocnemius","Sit with the pad on your knees and push through the balls of your feet.","Do not bounce at the bottom.","https://www.youtube.com/results?search_query=seated+calf+raise+proper+form"],
  ["Smith Machine Calf Raise","A","3 x 12-20","Gastrocnemius","Soleus","Stand on a raised surface and use a full range of motion.","Do not lock out your knees aggressively.","https://www.youtube.com/results?search_query=smith+machine+calf+raise+proper+form"],
  ["Single-Leg Standing Calf Raise","A","3 x 12-15","Gastrocnemius","Soleus","Hold a dumbbell and use a full stretch and squeeze.","Do not rush through reps.","https://www.youtube.com/results?search_query=single+leg+calf+raise+proper+form"],

  // ──────────────────────────────────────────────
  // ADDITIONAL CORE
  // ──────────────────────────────────────────────
  ["Dragon Flag","S","3 x 5-8","Abs","Hip Flexors; Core","Lower your body in a straight line from the bench.","Do not bend at the hips.","https://www.youtube.com/results?search_query=dragon+flag+proper+form"],
  ["Bicycle Crunch","A","3 x 15-20","Abs","Obliques","Alternate elbow to opposite knee with controlled motion.","Do not pull on your neck.","https://www.youtube.com/results?search_query=bicycle+crunch+proper+form"],
  ["Russian Twist","A","3 x 15-20","Obliques","Abs; Core","Keep your feet elevated and rotate your torso side to side.","Do not round your back.","https://www.youtube.com/results?search_query=russian+twist+proper+form"],
  ["Woodchop (Cable)","A","3 x 10-15","Obliques","Core; Shoulders","Rotate through your core, not your arms.","Do not twist your knees.","https://www.youtube.com/results?search_query=cable+woodchop+proper+form"],
  ["Side Plank","A","3 x 20-45 sec","Obliques","Core; Glutes","Stack your feet and keep your body in a straight line.","Do not let your hips drop.","https://www.youtube.com/results?search_query=side+plank+proper+form"],
  ["Dead Bug","A","3 x 10-15","Core","Abs; Hip Flexors","Keep your lower back pressed to the floor throughout.","Do not arch your back.","https://www.youtube.com/results?search_query=dead+bug+proper+form"],
  ["Copenhagen Plank","S","3 x 15-30 sec","Adductors","Obliques; Core","Rest your top leg on a bench and hold a side plank.","Do not let your hips rotate.","https://www.youtube.com/results?search_query=copenhagen+plank+proper+form"],
  ["Weighted Plank","A","3 x 30-60 sec","Core","Abs; Glutes","Place a plate on your back and maintain a neutral spine.","Do not let your hips sag or pike up.","https://www.youtube.com/results?search_query=weighted+plank+proper+form"],
  ["L-Sit Hold","S","3 x 15-30 sec","Abs","Hip Flexors; Core","Press down on parallettes and hold legs parallel to the floor.","Do not round your shoulders.","https://www.youtube.com/results?search_query=l+sit+hold+proper+form"],
  ["Suitcase Carry","A","3 x 20-40 m","Obliques","Core; Grip; Traps","Hold a heavy dumbbell on one side and walk upright.","Do not lean toward the weight.","https://www.youtube.com/results?search_query=suitcase+carry+proper+form"],
  ["Toes-to-Bar","S","3 x 8-12","Abs","Hip Flexors; Lats","Hang from a bar and bring toes to touch it.","Do not kip excessively.","https://www.youtube.com/results?search_query=toes+to+bar+proper+form"],

  // ──────────────────────────────────────────────
  // ADDITIONAL CONDITIONING / ATHLETIC
  // ──────────────────────────────────────────────
  ["Sled Push","S","4 x 20-40 m","Quads","Glutes; Calves; Core","Keep arms extended and drive through your legs.","Do not round your back.","https://www.youtube.com/results?search_query=sled+push+proper+form"],
  ["Tire Flip","A","3 x 6-10","Legs","Glutes; Back; Core; Shoulders","Squat low, drive through your hips, and flip.","Do not lift with your lower back.","https://www.youtube.com/results?search_query=tire+flip+proper+form"],
  ["Medicine Ball Slam","A","3 x 10-15","Core","Shoulders; Lats","Slam the ball into the ground with full force.","Do not round your back on the pickup.","https://www.youtube.com/results?search_query=medicine+ball+slam+proper+form"],
  ["Rowing Machine (Erg)","A","5 x 500 m","Conditioning","Legs; Back; Core","Drive with legs first, then lean and pull.","Do not pull with your arms first.","https://www.youtube.com/results?search_query=rowing+machine+proper+form"],
  ["Assault Bike Sprint","S","5 x 30 sec","Conditioning","Legs; Core; Arms","Push and pull the handles while pedaling hard.","Do not hold your breath.","https://www.youtube.com/results?search_query=assault+bike+sprint+proper+form"],
  ["Jump Rope","A","5 x 1-2 min","Conditioning","Calves; Core; Shoulders","Stay on the balls of your feet and turn the rope with your wrists.","Do not jump too high.","https://www.youtube.com/results?search_query=jump+rope+proper+form"],
  ["Bear Crawl","A","3 x 20-40 m","Core","Shoulders; Quads; Glutes","Keep your hips low and move contralateral limbs together.","Do not let your hips rise too high.","https://www.youtube.com/results?search_query=bear+crawl+proper+form"],
  ["Broad Jump","A","3 x 5-8","Explosive Legs","Glutes; Core","Swing your arms and jump forward as far as you can.","Do not land stiff-legged.","https://www.youtube.com/results?search_query=broad+jump+proper+form"],
  ["Burpee","A","3 x 10-15","Conditioning","Chest; Core; Legs","Perform each phase with control — squat, plank, push-up, jump.","Do not sacrifice form for speed.","https://www.youtube.com/results?search_query=burpee+proper+form"],
  ["Turkish Get-Up","S","3 x 3-5","Core","Shoulders; Glutes; Legs","Move through each position deliberately with the weight overhead.","Do not rush any transition.","https://www.youtube.com/results?search_query=turkish+get+up+proper+form"],
  ["Clean and Press","S","3 x 5-8","Shoulders","Legs; Core; Traps","Clean the bar to your shoulders, then press overhead.","Do not press-out before the clean is finished.","https://www.youtube.com/results?search_query=clean+and+press+proper+form"],
  ["Power Clean","S","4 x 3-5","Explosive Legs","Traps; Glutes; Core","Pull from the floor and catch in a front rack.","Do not pull with your arms.","https://www.youtube.com/results?search_query=power+clean+proper+form"],
  ["Hang Snatch","S","3 x 3-5","Explosive Legs","Shoulders; Core; Upper Back","Start at the hang position and catch overhead.","Do not muscle the weight up.","https://www.youtube.com/results?search_query=hang+snatch+proper+form"],
  ["Wall Ball","A","3 x 15-20","Quads","Shoulders; Core; Glutes","Squat deep and throw the ball to the target on the wall.","Do not let the ball hit you on the way down.","https://www.youtube.com/results?search_query=wall+ball+proper+form"],
  ["Thrusters","S","3 x 8-12","Quads","Shoulders; Core; Glutes","Front squat into an overhead press in one fluid motion.","Do not pause between the squat and press.","https://www.youtube.com/results?search_query=thrusters+proper+form"],
  ["Man Makers","A","3 x 6-10","Conditioning","Chest; Back; Shoulders; Legs","Row, push-up, clean, press — all with dumbbells.","Do not skip any phase of the movement.","https://www.youtube.com/results?search_query=man+makers+proper+form"],
  ["Sandbag Carry","A","3 x 20-40 m","Core","Legs; Grip; Back","Bear-hug the sandbag and walk with short steps.","Do not lean too far backward.","https://www.youtube.com/results?search_query=sandbag+carry+proper+form"],

  // ──────────────────────────────────────────────
  // STRETCHING / MOBILITY
  // ──────────────────────────────────────────────
  ["Hip 90/90 Stretch","A","3 x 30 sec","Glutes","Hip Flexors; Adductors","Sit with both legs at 90° angles and rotate between sides.","Do not force the stretch.","https://www.youtube.com/results?search_query=hip+90+90+stretch+proper+form"],
  ["World's Greatest Stretch","A","3 x 5-8","Core","Hip Flexors; Hamstrings; Upper Back","Lunge forward, rotate, and reach overhead.","Do not rush through the positions.","https://www.youtube.com/results?search_query=worlds+greatest+stretch+proper+form"],
  ["Cat-Cow Stretch","A","3 x 10-12","Core","Lower Back; Abs","Alternate arching and rounding your spine on all fours.","Do not force range beyond comfort.","https://www.youtube.com/results?search_query=cat+cow+stretch+proper+form"],
  ["Band Pull-Apart","A","3 x 15-20","Rear Delts","Upper Back","Pull the band apart with straight arms at shoulder height.","Do not shrug your shoulders.","https://www.youtube.com/results?search_query=band+pull+apart+proper+form"],
  ["Face Pull (Band)","A","3 x 15-20","Rear Delts","Upper Back; Rotator Cuff","Pull the band toward your forehead with elbows high.","Do not use momentum.","https://www.youtube.com/results?search_query=band+face+pull+proper+form"]
];

function normalizeExerciseEntry(entry) {
  if (!Array.isArray(entry)) return entry;

  const [name, tier = "A", scheme = "3 × 10", primary = "Core", secondaryText = "", description = ""] = entry;
  const secondary =
    secondaryText && secondaryText !== "—"
      ? secondaryText
          .split(";")
          .map(part => part.trim())
          .filter(Boolean)
      : [];

  return {
    id: String(name).toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    primary,
    secondary,
    scheme,
    tier,
    description,
    trending: false
  };
}

function makeUniqueExerciseId(baseId, takenIds) {
  let candidate = baseId || "exercise";
  let suffix = 2;
  while (takenIds.has(candidate)) {
    candidate = `${baseId}-${suffix}`;
    suffix += 1;
  }
  return candidate;
}

function yaoMergeExtraExercises() {
  const mapByName = new Map();
  EXERCISES.forEach(exercise => {
    if (exercise && exercise.name) {
      mapByName.set(String(exercise.name).toLowerCase(), exercise);
    }
  });

  YAO_EXTRA_EXERCISES.forEach(entry => {
    const normalized = normalizeExerciseEntry(entry);
    if (!normalized || !normalized.name) return;

    const key = normalized.name.toLowerCase();
    const existing = mapByName.get(key);
    if (!existing) {
      EXERCISES.push(normalized);
      mapByName.set(key, normalized);
    } else {
      if (Array.isArray(normalized.secondary)) {
        const secSet = new Set(Array.isArray(existing.secondary) ? existing.secondary : []);
        normalized.secondary.forEach(s => secSet.add(s));
        existing.secondary = [...secSet];
      }
      if (!existing.description && normalized.description) {
        existing.description = normalized.description;
      }
      if (!existing.tier && normalized.tier) {
        existing.tier = normalized.tier;
      }
    }
  });
}

/* Guarantees every exercise has a unique id, a unique name and an
   array of secondary muscles. Duplicate ids used to make logging a
   lift resolve to the wrong exercise. */
function normalizeExerciseLibrary() {
  const seenNames = new Set();
  const seenIds = new Set();
  const cleaned = [];

  EXERCISES.forEach(exercise => {
    if (!exercise || !exercise.name) return;

    const nameKey = String(exercise.name).trim().toLowerCase();
    if (seenNames.has(nameKey)) return;
    seenNames.add(nameKey);

    const baseId = String(exercise.id || nameKey.replace(/[^a-z0-9]+/g, "-"))
      .replace(/^-+|-+$/g, "")
      .toLowerCase();

    cleaned.push({
      ...exercise,
      id: makeUniqueExerciseId(baseId, seenIds),
      secondary: Array.isArray(exercise.secondary) ? exercise.secondary : [],
      tier: exercise.tier || "A",
      scheme: exercise.scheme || "3 × 10"
    });

    seenIds.add(cleaned[cleaned.length - 1].id);
  });

  EXERCISES.length = 0;
  cleaned.forEach(exercise => EXERCISES.push(exercise));
}

/* Organized library helpers */
const YAO_EXERCISE_CATEGORIES = {
  "Chest": ["Chest","Upper Chest","Lower Chest"],
  "Back": ["Lats","Upper Back","Mid Back"],
  "Shoulders": ["Front Delts","Side Delts","Rear Delts","Traps","Rotator Cuff"],
  "Arms": ["Biceps","Triceps","Brachialis","Forearms","Grip","Long Head Triceps"],
  "Legs": ["Quads","Hamstrings","Legs","Adductors"],
  "Glutes": ["Glutes"],
  "Calves": ["Calves","Gastrocnemius","Soleus"],
  "Core": ["Abs","Obliques","Core","Hip Flexors","Lower Back","Serratus"],
  "Conditioning": ["Conditioning","Explosive Legs","Grip"]
};

window.YAO_EXERCISE_CATEGORIES = YAO_EXERCISE_CATEGORIES;
window.YAO_EXTRA_EXERCISES = YAO_EXTRA_EXERCISES;

yaoMergeExtraExercises();
normalizeExerciseLibrary();

initializeApplication();
