const hospitals = [
    {
        id: 1,
        name: "Central City Medical Center",
        address: "123 Healthcare Ave, Downtown",
        image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=1000",
        specialties: ["Cardiology", "Neurology", "Orthopedics"],
        rating: 4.8,
        emergency: true,
        description: "A leading healthcare facility providing comprehensive medical services with state-of-the-art technology and expert care.",
        stats: {
            beds: 500,
            doctors: 150,
            staff: 1200,
            dailyPatients: 2000
        },
        facilities: [
            "24/7 Emergency Care",
            "Advanced Diagnostic Imaging",
            "Modern Operating Theaters",
            "Intensive Care Units",
            "Rehabilitation Center"
        ]
    },
    {
        id: 2,
        name: "Riverside General Hospital",
        address: "456 Wellness Blvd, Riverside",
        image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&q=80&w=1000",
        specialties: ["Pediatrics", "Oncology", "Surgery"],
        rating: 4.6,
        emergency: true,
        description: "Committed to providing exceptional healthcare services with a focus on patient comfort and advanced medical treatments.",
        stats: {
            beds: 400,
            doctors: 120,
            staff: 900,
            dailyPatients: 1500
        },
        facilities: [
            "Emergency Department",
            "Cancer Treatment Center",
            "Pediatric Wing",
            "Surgical Suite",
            "Physical Therapy"
        ]
    },
    {
        id: 3,
        name: "Summit Health Institute",
        address: "789 Medical Park, Hillside",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
        specialties: ["Dermatology", "Psychiatry", "Internal Medicine"],
        rating: 4.7,
        emergency: false,
        description: "A specialized medical institute focusing on outpatient care and advanced treatment methods in various medical fields.",
        stats: {
            beds: 200,
            doctors: 80,
            staff: 500,
            dailyPatients: 800
        },
        facilities: [
            "Specialized Clinics",
            "Mental Health Center",
            "Research Facility",
            "Outpatient Services",
            "Diagnostic Center"
        ]
    }

    
];

const doctors = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Cardiology",
        experience: 15,
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000",
        hospitalId: 1,
        rating: 4.9,
        availability: ["Monday", "Wednesday", "Friday"]
    },
    {
        id: 2,
        name: "Dr. Michael Chen",
        specialty: "Neurology",
        experience: 12,
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1000",
        hospitalId: 1,
        rating: 4.7,
        availability: ["Tuesday", "Thursday", "Saturday"]
    },
    {
        id: 3,
        name: "Dr. Emily Rodriguez",
        specialty: "Pediatrics",
        experience: 10,
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000",
        hospitalId: 2,
        rating: 4.8,
        availability: ["Monday", "Tuesday", "Thursday"]
    },
    {
        id: 4,
        name: "Dr. James Wilson",
        specialty: "Oncology",
        experience: 18,
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000",
        hospitalId: 2,
        rating: 4.9,
        availability: ["Monday", "Wednesday", "Friday"]
    },
    {
        id: 5,
        name: "Dr. Lisa Park",
        specialty: "Dermatology",
        experience: 8,
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000",
        hospitalId: 3,
        rating: 4.6,
        availability: ["Tuesday", "Thursday", "Friday"]
    }
];