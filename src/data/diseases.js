const diseases = [
    {
        symptoms: [],
        disease: "No Disease Detected",
        department: "General Medicine",
        action: "No symptoms selected. Stay healthy and consult a doctor if you feel unwell."
    },

    {
        symptoms: ["Fever"],
        disease: "Mild Viral Fever",
        department: "General Medicine",
        action: "Take rest, drink plenty of water and monitor your temperature."
    },

    {
        symptoms: ["Cough"],
        disease: "Common Cold",
        department: "General Medicine",
        action: "Drink warm fluids and take adequate rest."
    },

    {
        symptoms: ["Headache"],
        disease: "Migraine",
        department: "Neurology",
        action: "Rest in a quiet room and consult a neurologist if pain persists."
    },

    {
        symptoms: ["Vomiting"],
        disease: "Food Poisoning",
        department: "Gastroenterology",
        action: "Drink ORS, stay hydrated and visit a doctor if vomiting continues."
    },

    {
        symptoms: ["Fever", "Cough"],
        disease: "Flu (Influenza)",
        department: "General Medicine",
        action: "Take rest, drink fluids and consult a physician."
    },

    {
        symptoms: ["Fever", "Headache"],
        disease: "Viral Fever",
        department: "General Medicine",
        action: "Stay hydrated, rest and monitor body temperature."
    },

    {
        symptoms: ["Fever", "Vomiting"],
        disease: "Typhoid (Possible)",
        department: "General Medicine",
        action: "Consult a doctor for blood tests and avoid outside food."
    },

    {
        symptoms: ["Cough", "Headache"],
        disease: "Sinus Infection",
        department: "ENT",
        action: "Drink warm fluids and consult an ENT specialist."
    },

    {
        symptoms: ["Cough", "Vomiting"],
        disease: "Severe Throat Infection",
        department: "ENT",
        action: "Visit a doctor and stay hydrated."
    },

    {
        symptoms: ["Headache", "Vomiting"],
        disease: "Migraine Attack",
        department: "Neurology",
        action: "Rest in a dark room and consult a neurologist."
    },

    {
        symptoms: ["Fever", "Cough", "Headache"],
        disease: "COVID-19 / Influenza (Possible)",
        department: "General Medicine",
        action: "Wear a mask, isolate if necessary and consult a physician for testing."
    },

    {
        symptoms: ["Fever", "Cough", "Vomiting"],
        disease: "Respiratory Infection",
        department: "Pulmonology",
        action: "Consult a pulmonologist and drink plenty of fluids."
    },

    {
        symptoms: ["Fever", "Headache", "Vomiting"],
        disease: "Dengue (Possible)",
        department: "General Medicine",
        action: "Seek immediate medical attention and get a blood test."
    },

    {
        symptoms: ["Cough", "Headache", "Vomiting"],
        disease: "Severe Viral Infection",
        department: "General Medicine",
        action: "Consult a doctor immediately for proper diagnosis."
    },

    {
        symptoms: ["Fever", "Cough", "Headache", "Vomiting"],
        disease: "Serious Infection",
        department: "Emergency Medicine",
        action: "Visit the nearest hospital or emergency department immediately."
    }
];

export default diseases;