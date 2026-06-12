exports.getHomeContent = async (req, res) => {
  try {
    const homeContent = {
      hero: {
        title: "Welcome to Our School",
        subtitle: "CBSE-style learning, modern infrastructure, and a student-friendly campus",
        cta: "Apply Now",
      },
      quickFacts: [
        { label: "CBSE Curriculum", icon: "book" },
        { label: "Safe Campus", icon: "shield" },
        { label: "Smart Classes", icon: "monitor" },
        { label: "Transport Facility", icon: "bus" },
      ],
      about: {
        title: "About the School",
        description: "A CBSE-style private school in Jharkhand focused on quality education, safe learning, and transparent information for parents. Our school is committed to nurturing every child's potential through modern teaching methods, experienced faculty, and a supportive environment.",
      },
      facilities: [
        { name: "Library", description: "Well-stocked library with thousands of books", icon: "book-open" },
        { name: "Computer Lab", description: "Modern computer lab with high-speed internet", icon: "computer" },
        { name: "Science Labs", description: "Fully equipped Physics, Chemistry & Biology labs", icon: "flask" },
        { name: "Sports Ground", description: "Large playground for cricket, football & athletics", icon: "trophy" },
        { name: "Smart Classes", description: "Digital classrooms with interactive boards", icon: "monitor" },
        { name: "Transport", description: "Safe bus service covering major routes", icon: "bus" },
      ],
      testimonials: [
        { name: "Rajesh Kumar", role: "Parent", text: "The school provides excellent education and my child has shown remarkable improvement." },
        { name: "Priya Singh", role: "Parent", text: "Very transparent administration. All information is easily accessible." },
        { name: "Amit Verma", role: "Alumni", text: "The foundation I received here helped me succeed in competitive exams." },
      ],
    };
    res.json({ success: true, data: homeContent });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.getAboutContent = async (req, res) => {
  try {
    const aboutContent = {
      title: "About Our School",
      vision: "To be a center of excellence in education, nurturing responsible citizens and future leaders.",
      mission: "To provide quality CBSE education in a safe, inclusive, and stimulating environment that promotes academic excellence and holistic development.",
      history: "Founded with the vision of providing quality education in Jharkhand, our school has grown to become one of the most trusted educational institutions in the region.",
      values: ["Academic Excellence", "Moral Values", "Innovation", "Inclusivity", "Transparency"],
      stats: { students: "1000+", faculty: "50+", years: "15+", passRate: "98%" },
    };
    res.json({ success: true, data: aboutContent });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.getDisclosureContent = async (req, res) => {
  try {
    const disclosureContent = {
      title: "Mandatory Disclosure",
      sections: [
        { heading: "School Details", items: [
          { label: "Name of School", value: "CBSE Private School" },
          { label: "Affiliation Number", value: "XXXXX" },
          { label: "School Code", value: "XXXXX" },
          { label: "Address", value: "Jharkhand, India" },
          { label: "Phone", value: "+91 XXXXXXXXXX" },
          { label: "Email", value: "info@school.com" },
          { label: "Website", value: "www.school.com" },
        ]},
        { heading: "Academic Details", items: [
          { label: "Affiliation Board", value: "CBSE" },
          { label: "Classes Offered", value: "Nursery to Class XII" },
          { label: "Medium of Instruction", value: "English" },
          { label: "Academic Session", value: "April to March" },
        ]},
        { heading: "Infrastructure", items: [
          { label: "Campus Area", value: "5 Acres" },
          { label: "Number of Classrooms", value: "40" },
          { label: "Library", value: "Yes" },
          { label: "Computer Lab", value: "Yes" },
          { label: "Science Labs", value: "3 (Physics, Chemistry, Biology)" },
          { label: "Playground", value: "Yes" },
          { label: "Transport", value: "Yes" },
        ]},
        { heading: "Fee Structure", items: [
          { label: "Nursery - KG", value: "Contact School" },
          { label: "Class I - V", value: "Contact School" },
          { label: "Class VI - VIII", value: "Contact School" },
          { label: "Class IX - X", value: "Contact School" },
          { label: "Class XI - XII", value: "Contact School" },
        ]},
      ],
    };
    res.json({ success: true, data: disclosureContent });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
