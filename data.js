/**
 * Sam's Fitness Ladies Gym - Data Store
 * Exclusively for Women | Shadman Town, Karachi
 */

const gymData = {
  brand: {
    name: "Sam's Fitness",
    tagline: "Ladies Gym",
    slogan: "Empower Your Body. Elevate Your Lifestyle.",
    badge: "EXCLUSIVELY FOR WOMEN • SHADMAN TOWN, KARACHI",
    description: "A comfortable, private, and fully equipped sanctuary dedicated exclusively to women's strength, healthy weight loss, and holistic wellness.",
    phone: "03154184055",
    phoneDisplay: "0315-4184055",
    whatsappUrl: "https://wa.me/923154184055?text=Assalam-o-Alaikum%20Sam's%20Fitness!%20I%20would%20like%20to%20inquire%20about%20ladies%20membership%20and%20book%20a%20free%20trial.",
    email: "samsfitnesss@gmail.com",
    facebookUrl: "https://www.facebook.com/samsfitnessladiesgym/",
    address: "H # R, 680, near Hyder Foods, Shadman Town Sector 14 A, Shadman Town, Karachi, 74600, Pakistan",
    timings: [
      { shift: "Morning Session", hours: "10:00 AM - 01:30 PM", desc: "Energizing cardio, aerobics & fat burn" },
      { shift: "Evening Session", hours: "04:30 PM - 09:30 PM", desc: "Strength, toning, HIIT & personal coaching" },
      { shift: "Days", hours: "Monday to Saturday", desc: "Sunday exclusively reserved for deep sanitization" }
    ],
    stats: [
      { count: "100%", label: "Female Staff & Trainers" },
      { count: "1,200+", label: "Happy Female Members" },
      { count: "10+", label: "Years Fitness Excellence" },
      { count: "Zero", label: "Male Intrusion Guaranteed" }
    ]
  },

  whyUs: [
    {
      id: "privacy",
      title: "100% Strict Privacy & Security",
      desc: "Work out with total peace of mind. A secluded, women-only secure atmosphere with female staff, frosted privacy glass, and zero male access.",
      icon: "shield"
    },
    {
      id: "trainers",
      title: "Certified Female Trainers",
      desc: "Our passionate, certified female coaches understand women's anatomy, hormonal cycles, post-pregnancy recovery, and body recomposition.",
      icon: "award"
    },
    {
      id: "equipment",
      title: "Ergonomic Women's Equipment",
      desc: "Imported modern pin-loaded machines, Olympic bars with lighter starter weights, resistance cords, and low-impact joint-friendly treadmills.",
      icon: "dumbbell"
    },
    {
      id: "community",
      title: "Supportive Sisterhood",
      desc: "Experience a motivating, zero-judgment atmosphere where ladies uplift, encourage, and celebrate each other's fitness milestones.",
      icon: "heart"
    }
  ],

  programs: [
    {
      id: "weight-loss",
      title: "Weight Loss & Aerobics",
      badge: "Most Popular",
      desc: "High-energy calorie-burning aerobic sessions paired with step aerobics, functional HIIT, and metabolic conditioning designed to shred body fat while keeping it fun.",
      features: ["Calorie-torching aerobics", "Step & dance cardio bursts", "Fat loss monitoring & BMI track"],
      icon: "flame"
    },
    {
      id: "strength-toning",
      title: "Strength Training & Toning",
      badge: "Sculpt & Define",
      desc: "Banish the myth that weights make women bulky. Build lean muscle, firm your glutes, sculpt your core, and rev your natural metabolic rate with resistance exercises.",
      features: ["Glute & hip targeting", "Upper body definition", "Core tightening & stability"],
      icon: "activity"
    },
    {
      id: "post-natal",
      title: "Post-Natal & Fitness Recovery",
      badge: "Gentle & Restorative",
      desc: "Safe, doctor-aligned rehabilitation exercises for new mothers. Heal diastasis recti, strengthen pelvic floor muscles, and safely regain core strength and posture.",
      features: ["Diastasis recti repair", "Pelvic floor strengthening", "Gentle progressive overload"],
      icon: "sparkles"
    },
    {
      id: "personal-diet",
      title: "Personal Female Coaching & Diet Plans",
      badge: "Custom 1-on-1",
      desc: "1-on-1 personalized attention with customized Desi-friendly healthy nutrition blueprints, portion control coaching, and weekly body composition check-ups.",
      features: ["Pakistani healthy meal plans", "PCOS & thyroid friendly diets", "Direct WhatsApp coach guidance"],
      icon: "user-check"
    }
  ],

  gallery: [
    {
      id: 1,
      title: "Private Cardio Suite",
      subtitle: "Low-impact treadmills & elliptical stations",
      category: "Cardio",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
      tag: "Private Deck"
    },
    {
      id: 2,
      title: "Aerobics & Functional Studio",
      subtitle: "Spacious wooden sprung floor for safe joint movement",
      category: "Studio",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
      tag: "Aerobics Floor"
    },
    {
      id: 3,
      title: "Strength & Resistance Zone",
      subtitle: "Ergonomic pin-select machines and cable cross",
      category: "Strength",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
      tag: "Resistance Area"
    },
    {
      id: 4,
      title: "Free Weights & Kettlebells",
      subtitle: "Color-coded dumbbells, kettlebells, and barbell racks",
      category: "Free Weights",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop",
      tag: "Toning Station"
    },
    {
      id: 5,
      title: "Stretching & Yoga Corner",
      subtitle: "Calm, ambient recovery zone with yoga mats and rollers",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
      tag: "Post-Workout"
    },
    {
      id: 6,
      title: "Comfortable Changing & Vanity Area",
      subtitle: "Clean lockers, filtered drinking water & secure storage",
      category: "Amenities",
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop",
      tag: "Private Facility"
    }
  ],

  pricingData: [
    {
      id: "starter",
      title: "LADY STARTER",
      subtitle: "Perfect for beginners starting their fitness lifestyle",
      monthlyPKR: 3500,
      quarterlyPKR: 9000,
      savingsNote: "Save PKR 1,500 on 3-month plan",
      popular: false,
      badge: "Standard",
      perks: [
        "Full access to gym floor & cardio machines",
        "Morning or Evening session access",
        "Standard machine orientation & safety guidance",
        "Locker & changing room privileges",
        "Continuous female trainer floor supervision"
      ],
      ctaText: "Choose Starter Plan"
    },
    {
      id: "transformation",
      title: "FULL GLOW TRANSFORMATION",
      subtitle: "Our signature tier for proven fat loss & body toning",
      monthlyPKR: 6000,
      quarterlyPKR: 15500,
      savingsNote: "Save PKR 2,500 on 3-month plan",
      popular: true,
      badge: "Most Loved by Members",
      perks: [
        "Unlimited access (Morning & Evening sessions)",
        "Daily Aerobics & HIIT group classes included",
        "Customized Pakistani Fat-Loss Diet Chart",
        "Bi-weekly body fat & BMI progress check-ups",
        "PCOS & Thyroid exercise adjustments",
        "Direct coach guidance via WhatsApp group"
      ],
      ctaText: "Join Full Glow Tier"
    },
    {
      id: "vip-coaching",
      title: "VIP PERSONAL COACHING",
      subtitle: "Dedicated 1-on-1 female coach for rapid results",
      monthlyPKR: 12000,
      quarterlyPKR: 32000,
      savingsNote: "Save PKR 4,000 on 3-month plan",
      popular: false,
      badge: "1-on-1 Exclusive",
      perks: [
        "Dedicated personal female trainer (3 days/week)",
        "Fully tailored workout splits & progressive reps",
        "Hyper-personalized nutritionist designed meal plan",
        "Post-natal or special rehabilitation care",
        "Priority machine scheduling & form correction",
        "24/7 dedicated dietitian & coach chat support"
      ],
      ctaText: "Apply For VIP Coaching"
    }
  ],

  testimonials: [
    {
      name: "Dr. Ayesha Siddiqui",
      area: "Shadman Town",
      result: "Lost 12 kg in 4 months",
      comment: "Finding a 100% private gym with knowledgeable female trainers in Shadman was a blessing. The atmosphere is dignified, peaceful, and super motivating!"
    },
    {
      name: "Mariam Farooq",
      area: "Sector 14-A",
      result: "Overcame PCOS Fatigue & Toned Up",
      comment: "The trainers at Sam's Fitness don't just give you exercises; they understand how female hormones work. The Full Glow plan transformed my energy levels completely."
    },
    {
      name: "Sana Tariq",
      area: "North Nazimabad / Shadman",
      result: "Post-Pregnancy Core Recovery",
      comment: "I was hesitant after my C-section, but the coaches gave me safe, gentle pelvic floor and core exercises. Now I feel stronger than ever!"
    }
  ]
};

// Export to window for vanilla browser inclusion
if (typeof window !== "undefined") {
  window.gymData = gymData;
}
