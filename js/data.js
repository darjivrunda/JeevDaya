/**
 * Jeev Daya - Seed Data for Rescue Cases and Veterinary Clinics
 */

const DEFAULT_CASES = [
  {
    id: "JD-2041",
    name: "Rocky (Indie Pup)",
    species: "Dog",
    status: "critical",
    statusLabel: "Critical Care",
    badgeClass: "badge-critical",
    location: "Near Iscon Cross Road, SG Highway, Ahmedabad",
    city: "Ahmedabad",
    reportedTime: "2 hours ago",
    rescuer: "Team Alpha (Ambulance 02)",
    condition: "Hit-and-run accident, fracture in rear leg and severe dehydration.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=700&q=80",
    progress: 35,
    fundGoal: 6500,
    fundRaised: 3200
  },
  {
    id: "JD-2039",
    name: "Gauri (Holy Cow)",
    species: "Cattle",
    status: "treatment",
    statusLabel: "In Treatment",
    badgeClass: "badge-treatment",
    location: "Sector 21 Market, Gandhinagar",
    city: "Gandhinagar",
    reportedTime: "Yesterday",
    rescuer: "Dr. Dave & Ground Volunteers",
    condition: "Deep hoof infection and plastic ingestion. Under continuous vet IV support.",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=700&q=80",
    progress: 65,
    fundGoal: 12000,
    fundRaised: 8900
  },
  {
    id: "JD-2035",
    name: "Mithu (Ringneck Parakeet)",
    species: "Bird",
    status: "treatment",
    statusLabel: "In Treatment",
    badgeClass: "badge-treatment",
    location: "Kankaria Lake Zoo area, Ahmedabad",
    city: "Ahmedabad",
    reportedTime: "2 days ago",
    rescuer: "Avian Rescue Squad",
    condition: "Manja (kite string) entanglement with fractured wing. Surgery successful.",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=700&q=80",
    progress: 70,
    fundGoal: 3500,
    fundRaised: 3500
  },
  {
    id: "JD-2028",
    name: "Milo & Siblings (Kittens)",
    species: "Cat",
    status: "recovered",
    statusLabel: "Ready For Adoption",
    badgeClass: "badge-recovered",
    location: "Alkapuri, Vadodara",
    city: "Vadodara",
    reportedTime: "1 week ago",
    rescuer: "Foster Care Home",
    condition: "Found abandoned in a cardboard box during heavy rain. Now fully healed and vaccinated.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=700&q=80",
    progress: 100,
    fundGoal: 4000,
    fundRaised: 4000
  },
  {
    id: "JD-2022",
    name: "Sheru (Senior Stray)",
    species: "Dog",
    status: "treatment",
    statusLabel: "In Treatment",
    badgeClass: "badge-treatment",
    location: "Adajan, Surat",
    city: "Surat",
    reportedTime: "4 days ago",
    rescuer: "Surat Animal Care Trust",
    condition: "Severe skin mange and corneal injury. Recovering well with medicated baths.",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=700&q=80",
    progress: 55,
    fundGoal: 5000,
    fundRaised: 2800
  },
  {
    id: "JD-2015",
    name: "Karan (Baby Monkey)",
    species: "Wildlife",
    status: "recovered",
    statusLabel: "Recovered / Forest Release",
    badgeClass: "badge-recovered",
    location: "Girnar Foothills, Junagadh",
    city: "Other",
    reportedTime: "2 weeks ago",
    rescuer: "Forest Dept. & Jeev Daya Unit",
    condition: "Electrocution shock on transformer line. Treated, healed and released back to troop.",
    image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=700&q=80",
    progress: 100,
    fundGoal: 7000,
    fundRaised: 7000
  }
];

const DEFAULT_CLINICS = [
  {
    name: "Jeev Daya 24x7 Emergency Vet Hospital",
    city: "Ahmedabad",
    rating: 4.9,
    reviews: 580,
    address: "Opp. Panjrapole Campus, Ambawadi, Ahmedabad, Gujarat 380015",
    phone: "+91 79 2630 1122",
    timings: "Open 24 Hours / 7 Days",
    isEmergency: true,
    services: ["24x7 Ambulance", "ICU & Surgery", "Free Stray Treatment", "X-Ray & Pathology", "Avian Ward"]
  },
  {
    name: "Government Veterinary Polyclinic",
    city: "Gandhinagar",
    rating: 4.7,
    reviews: 320,
    address: "Near Ch-3 Circle, Sector 10, Gandhinagar, Gujarat 382010",
    phone: "+91 79 2325 4567",
    timings: "8:00 AM - 8:00 PM (Emergency on-call)",
    isEmergency: true,
    services: ["Free Cattle Treatment", "OPD", "Vaccination", "Emergency Surgery"]
  },
  {
    name: "Baroda Animal Care Center & Clinic",
    city: "Vadodara",
    rating: 4.8,
    reviews: 410,
    address: "Subhanpura High Street, Vadodara, Gujarat 390023",
    phone: "+91 265 228 9011",
    timings: "Open 24 Hours",
    isEmergency: true,
    services: ["24x7 Emergency", "Mobile Ambulance", "Stray Dog Sterilization", "Blood Bank"]
  },
  {
    name: "Surat Wildlife & Stray Welfare Hospital",
    city: "Surat",
    rating: 4.8,
    reviews: 290,
    address: "Ghod Dod Road, Athwa, Surat, Gujarat 395007",
    phone: "+91 261 247 8899",
    timings: "Open 24 Hours",
    isEmergency: true,
    services: ["Wildlife Rescue", "Bird Trauma Center", "Ambulance", "ICU"]
  },
  {
    name: "Happy Tails Veterinary Multispeciality",
    city: "Ahmedabad",
    rating: 4.6,
    reviews: 215,
    address: "Bodakdev, Off Sindhu Bhavan Road, Ahmedabad, Gujarat 380054",
    phone: "+91 98250 12345",
    timings: "9:00 AM - 9:00 PM",
    isEmergency: false,
    services: ["Orthopedic Surgery", "Ultrasound", "Dental Care", "Vaccinations"]
  },
  {
    name: "Karuna Animal Hospital & Shelter",
    city: "Rajkot",
    rating: 4.9,
    reviews: 470,
    address: "Bhavnagar Road, Aji Dam Chokdi, Rajkot, Gujarat 360003",
    phone: "+91 281 238 4400",
    timings: "Open 24 Hours",
    isEmergency: true,
    services: ["Cattle Rescue", "Dog & Cat Shelter", "Free Stray Ward", "24x7 Ambulance"]
  }
];

// Initialize LocalStorage with default data if empty
function initializeData() {
  if (!localStorage.getItem("jeevdaya_cases")) {
    localStorage.setItem("jeevdaya_cases", JSON.stringify(DEFAULT_CASES));
  }
  if (!localStorage.getItem("jeevdaya_clinics")) {
    localStorage.setItem("jeevdaya_clinics", JSON.stringify(DEFAULT_CLINICS));
  }
}

// Helper to get cases
function getRescueCases() {
  initializeData();
  try {
    return JSON.parse(localStorage.getItem("jeevdaya_cases")) || DEFAULT_CASES;
  } catch (e) {
    return DEFAULT_CASES;
  }
}

// Helper to save a new rescue case
function saveRescueCase(newCase) {
  const cases = getRescueCases();
  cases.unshift(newCase);
  localStorage.setItem("jeevdaya_cases", JSON.stringify(cases));
  return newCase;
}

// Helper to get clinics
function getClinics() {
  initializeData();
  try {
    return JSON.parse(localStorage.getItem("jeevdaya_clinics")) || DEFAULT_CLINICS;
  } catch (e) {
    return DEFAULT_CLINICS;
  }
}
