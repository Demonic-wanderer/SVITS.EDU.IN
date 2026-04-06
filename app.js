const STORAGE_KEYS = {
  users: "accsoftUsers",
  studentResults: "accsoftStudentResults"
};

const defaultUsers = [
  {
    login: "ADMIN",
    password: "ADMIN@7060",
    name: "ERP Administrator",
    role: "Administrator",
    isAdmin: true
  },
{
  login: "ANANYA.JAIN",
  password: "Ram@6517",
  name: "Ananya Jain",
  role: "Student",
  fatherName: "Vishal Jain",
  motherName: "Anita Jain",
  institute: "Shri Vaishnav Institute of Information Technology (SVIIT)",
  semester: "1",
  status: "Regular",
  resultKey: "ananya",
  resultFile: "./semester-1-result-ananya.html"
},
  {
    login: "2510BTAIML0079",
    password: "DEV@7060",
    name: "Dev Shrotiya",
    role: "Student",
    fatherName: "Deepak Shrotiya",
    motherName: "Neetu",
    institute: "Shri Vaishnav Institute of Information Technology (SVIIT)",
    semester: "1",
    status: "Regular",
    resultKey: "dev",
    resultFile: "./semester-1-result.html"
  },
  {
    login: "2510BTESRH0028",
    password: "TEJA@7060",
    name: "Tejas Lohana",
    role: "Student",
    fatherName: "Madhav Prasad Lohana",
    motherName: "Sheetal Lohana",
    institute: "Shri Vaishnav Institute of Information Technology (SVIIT)",
    semester: "1",
    status: "Regular",
    resultKey: "tejas",
    resultFile: "./semester-1-result-tejas.html"
  },
  {
    login: "2510BTESRH0024",
    password: "RITE@7060",
    name: "Riteek Aakash Saravgeer",
    role: "Student",
    fatherName: "Aakash Saravgeer",
    motherName: "Seema Saravgeer",
    institute: "Shri Vaishnav Institute of Information Technology (SVIIT)",
    semester: "1",
    status: "Regular",
    resultKey: "riteek",
    resultFile: "./semester-1-result-riteek.html"
  },
  { login: "rohan.verma", password: "rohan123", name: "Rohan Verma", role: "Parent / Student" }
];

const defaultStudentResults = {
  ananya: {
    description: "Semester 1 result summary for Ananya Jain with a Physics backlog based on the screenshot-style subject set.",
    sgpa: "5.84",
    cgpa: "5.84",
    totalCredits: "19",
    earnedCredits: "15",
    bestGrade: "A",
    rows: [
      ["BTCS101M", "Introduction to Computer Science and Engineering", "3", "3", "B+"],
      ["BTCS103M", "Computer System Organization", "3", "3", "B"],
      ["BTCS103M(P)", "Computer System Organization Lab", "1", "1", "A"],
      ["BTCS107M", "Program Development Using C", "1", "1", "A"],
      ["BTCSH102", "Statistics, Probability and Calculus", "3", "3", "B+"],
      ["BTPH101", "Applied Physics", "4", "0", "F"],
      ["BTPH101(P)", "Applied Physics Lab", "1", "1", "B+"],
      ["HUCS101", "Communication Skills", "1", "1", "B"],
      ["HUCS101(P)", "Communication Skills Lab", "1", "1", "A"]
    ],
    bullets: [
      ["Result status is FAIL due to Applied Physics", "Alert"],
      ["15 out of 19 credits were earned", "Summary"],
      ["Labs and communication subjects remain comparatively stronger", "Insight"]
    ],
    insight: "Ananya's semester 1 result shows a single backlog in Applied Physics, while the remaining subjects are largely stable."
  },
  dev: {
    description: "Semester 1 result summary synchronized with the detailed statement of marks page.",
    sgpa: "7.12",
    cgpa: "7.12",
    totalCredits: "19",
    earnedCredits: "19",
    bestGrade: "A+",
    rows: [
      ["BTAIML101N", "Python for AI-ML", "3", "3", "A"],
      ["BTAIML101N(P)", "Python for AI-ML Lab", "1", "1", "A+"],
      ["BTCS101M", "Introduction to Computer Science and Engineering", "3", "3", "B+"],
      ["BTCS101M(P)", "Introduction to Computer Science and Engineering Lab", "1", "1", "A"],
      ["BTCS107M", "Program Development Using C", "1", "1", "A"],
      ["BTCSH102", "Statistics, Probability and Calculus", "3", "3", "B"],
      ["BTPH101", "Applied Physics", "4", "4", "B+"],
      ["BTPH101(P)", "Applied Physics Lab", "1", "1", "A"],
      ["HUCS101", "Communication Skills", "1", "1", "B+"],
      ["HUCS101(P)", "Communication Skills Lab", "1", "1", "A"]
    ],
    bullets: [
      ["Result status is PASS", "Verified"],
      ["All 19 credits were earned successfully", "Positive"],
      ["Best scoring areas were lab-oriented courses", "Insight"]
    ],
    insight: "The semester 1 marksheet reflects a strong first-term performance with no failed papers and all credits earned."
  },
  tejas: {
    description: "Semester 1 result summary for Tejas Lohana with a backlog in Applied Physics theory.",
    sgpa: "6.20",
    cgpa: "6.20",
    totalCredits: "19",
    earnedCredits: "15",
    bestGrade: "A",
    rows: [
      ["BTCS101M", "Introduction to Computer Science and Engineering", "3", "3", "B+"],
      ["BTCS103M", "Computer System Organization", "3", "3", "B+"],
      ["BTCS103M(P)", "Computer System Organization Lab", "1", "1", "A"],
      ["BTCS107M", "Program Development Using C", "1", "1", "A"],
      ["BTCSH102", "Statistics, Probability and Calculus", "3", "3", "B"],
      ["BTPH101", "Applied Physics", "4", "0", "F"],
      ["BTPH101(P)", "Applied Physics Lab", "1", "1", "A"],
      ["HUCS101", "Communication Skills", "1", "1", "B+"],
      ["HUCS101(P)", "Communication Skills Lab", "1", "1", "A"],
      ["RND101", "R&D and Administration", "1", "1", "B+"]
    ],
    bullets: [
      ["Result status is FAIL due to Applied Physics theory", "Alert"],
      ["15 out of 19 credits were earned successfully", "Summary"],
      ["Practical and systems papers remain stronger than theory physics", "Insight"]
    ],
    insight: "Tejas now carries a single backlog in Applied Physics theory, which pulls the semester result down to a 6.20 CGPA/SGPA."
  },
  riteek: {
    description: "Semester 1 result summary for Riteek Aakash Saravgeer with a strong 7.37 SGPA and full credits earned.",
    sgpa: "7.37",
    cgpa: "7.37",
    totalCredits: "19",
    earnedCredits: "19",
    bestGrade: "A+",
    rows: [
      ["BTCS101M", "Introduction to Computer Science and Engineering", "3", "3", "B"],
      ["BTCS103M", "Computer System Organization", "3", "3", "B+"],
      ["BTCS103M(P)", "Computer System Organization Lab", "1", "1", "A+"],
      ["BTCS107M", "Program Development Using C", "1", "1", "A"],
      ["BTCSH102", "Statistics, Probability and Calculus", "3", "3", "B+"],
      ["BTPH101", "Applied Physics", "4", "4", "B"],
      ["BTPH101(P)", "Applied Physics Lab", "1", "1", "A"],
      ["HUCS101", "Communication Skills", "1", "1", "B+"],
      ["HUCS101(P)", "Communication Skills Lab", "1", "1", "A"],
      ["RND101", "R&D and Administration", "1", "1", "A"]
    ],
    bullets: [
      ["Result status is PASS", "Verified"],
      ["Programming and lab components lifted the SGPA", "High point"],
      ["All 19 credits were earned successfully", "Positive"]
    ],
    insight: "Riteek's semester 1 result stays strong overall, with especially good practical-course performance and a healthy 7.37 SGPA."
  }
};

function cloneData(value) {

  return JSON.parse(JSON.stringify(value));
}

function normalizeStoredUsers(storedUsers) {
  const merged = cloneData(defaultUsers);

  if (!Array.isArray(storedUsers)) {
    return merged;
  }

  storedUsers.forEach(function (storedUser) {
    if (!storedUser || typeof storedUser !== "object") {
      return;
    }

    const normalizedUser = Object.assign({}, storedUser);

    if (String(normalizedUser.login || "").toUpperCase() === "2510BTAIIB0055" || String(normalizedUser.name || "").toUpperCase() === "AARAV SHARMA") {
      normalizedUser.login = "ANANYA.JAIN";
      normalizedUser.name = "Ananya Jain";
      normalizedUser.fatherName = normalizedUser.fatherName || "Vishal Jain";
      normalizedUser.resultKey = normalizedUser.resultKey || "ananya";
      normalizedUser.resultFile = normalizedUser.resultFile || "./semester-1-result-ananya.html";
      normalizedUser.role = normalizedUser.role || "Student";
    }

    const existingIndex = merged.findIndex(function (defaultUser) {
      return defaultUser.login.toUpperCase() === String(normalizedUser.login || "").toUpperCase();
    });

    if (existingIndex >= 0) {
      merged[existingIndex] = Object.assign({}, merged[existingIndex], normalizedUser);
    } else {
      merged.push(normalizedUser);
    }
  });

  if (!merged.some(function (user) { return user.isAdmin; })) {
    merged.unshift(cloneData(defaultUsers[0]));
  }

  return merged;
}

function loadUsers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.users);
    return normalizeStoredUsers(raw ? JSON.parse(raw) : null);
  } catch (error) {
    return cloneData(defaultUsers);
  }
}

function saveUsers() {
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
}

function normalizeStoredResults(storedResults) {
  const merged = cloneData(defaultStudentResults);

  if (!storedResults || typeof storedResults !== "object") {
    return merged;
  }

  Object.keys(storedResults).forEach(function (key) {
    merged[key] = Object.assign({}, merged[key] || {}, storedResults[key]);
  });

  return merged;
}

function loadStudentResults() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.studentResults);
    return normalizeStoredResults(raw ? JSON.parse(raw) : null);
  } catch (error) {
    return cloneData(defaultStudentResults);
  }
}

function saveStudentResults() {
  localStorage.setItem(STORAGE_KEYS.studentResults, JSON.stringify(studentResults));
}

function ensureResultEntry(resultKey) {
  if (!resultKey) {
    return null;
  }

  if (!studentResults[resultKey]) {
    studentResults[resultKey] = {
      description: "Editable student result summary.",
      sgpa: "0.00",
      cgpa: "0.00",
      totalCredits: "0",
      earnedCredits: "0",
      bestGrade: "-",
      rows: [],
      bullets: [],
      insight: "Update this result from the admin panel."
    };
  }

  return studentResults[resultKey];
}

let users = loadUsers();
let studentResults = loadStudentResults();

const studentDashboards = {
ananya: {
  "assessment-marks": {
    description: "Internal marks snapshot for Ananya Jain in semester 1, with weaker theory performance in Physics.",
    stats: [
      { value: "5.84", label: "SGPA Aligned" },
      { value: "9", label: "Papers Tracked" },
      { value: "A", label: "Best Internal Grade" }
    ],
    rows: [
      ["Introduction to CSE", "Internal Test 2", "Meenal Saxena", "15 / 20"],
      ["Computer System Organization", "Mid Term", "Vikas Bansal", "13 / 20"],
      ["Program Development Using C", "Lab Review", "Apoorva Nair", "18 / 20"],
      ["Applied Physics", "Class Test", "S. K. Tiwari", "08 / 20"]
    ],
    bullets: [
      ["Programming lab marks are stable", "Positive"],
      ["Physics theory still needs immediate attention", "Watch"],
      ["Statistics tutorial marks improved this week", "Update"]
    ],
    insight: "Ananya is doing reasonably well in practical and communication-oriented work, but Physics theory remains the risk area."
  },
  "assignments": {
    description: "Assignment status for Ananya Jain across semester 1 subjects.",
    stats: [
      { value: "3", label: "Pending Tasks" },
      { value: "8", label: "Submitted" },
      { value: "2", label: "Due This Week" }
    ],
    rows: [
      ["Computer System Organization", "Memory Unit Summary", "08 Apr 2026", "Submitted"],
      ["Program Development Using C", "Functions Practice Sheet", "09 Apr 2026", "Pending"],
      ["Applied Physics", "Numericals Revision File", "10 Apr 2026", "Pending"],
      ["Communication Skills", "Presentation Notes", "11 Apr 2026", "In Review"]
    ],
    bullets: [
      ["Physics work should be completed first", "Priority"],
      ["Programming assignment is nearly ready", "Close"],
      ["Communication submission is already under review", "Good"]
    ],
    insight: "The workload is manageable, but Physics needs to be front-loaded to avoid another weak cycle."
  },
  "attendance-status": {
    description: "Course-wise attendance summary for Ananya Jain.",
    stats: [
      { value: "84%", label: "Overall Attendance" },
      { value: "75%", label: "Minimum Required" },
      { value: "9", label: "Papers Counted" }
    ],
    rows: [
      ["Introduction to CSE", "30", "26", "86.7%"],
      ["Computer System Organization", "30", "25", "83.3%"],
      ["Applied Physics", "34", "26", "76.5%"],
      ["Communication Skills", "22", "20", "90.9%"]
    ],
    bullets: [
      ["Physics attendance is barely above safe range", "Alert"],
      ["Communication classes are well attended", "Positive"],
      ["No detention warning yet", "Safe"]
    ],
    insight: "Attendance is still eligible overall, but Physics should not slip any lower."
  },
  "current-backlog": {
    description: "Backlog snapshot for Ananya Jain based on semester 1 standing.",
    stats: [
      { value: "1", label: "Open Backlog" },
      { value: "0", label: "Cleared Earlier" },
      { value: "Fail", label: "Standing" }
    ],
    rows: [
      ["Applied Physics", "Semester I", "Backlog", "Prepare for reappear"],
      ["Introduction to CSE", "Semester I", "Cleared", "No action"],
      ["Computer System Organization", "Semester I", "Cleared", "No action"],
      ["Communication Skills", "Semester I", "Cleared", "No action"]
    ],
    bullets: [
      ["Applied Physics is the only uncleared paper", "Critical"],
      ["All other semester 1 papers are credited", "Verified"],
      ["Use the reappear window strategically", "Advice"]
    ],
    insight: "Ananya has a single Physics backlog, so the recovery plan can stay focused on one paper."
  },
  "time-table": {
    description: "Weekly class schedule for Ananya Jain's semester 1 section.",
    stats: [
      { value: "24", label: "Weekly Lectures" },
      { value: "3", label: "Lab Blocks" },
      { value: "A-105", label: "Main Room" }
    ],
    rows: [
      ["Monday", "08:15 - 09:15", "Introduction to CSE", "A-105"],
      ["Tuesday", "10:15 - 12:15", "Computer System Organization Lab", "CL-2"],
      ["Wednesday", "12:15 - 01:15", "Applied Physics", "PHY-2"],
      ["Friday", "11:15 - 12:15", "Communication Skills", "A-105"]
    ],
    bullets: [
      ["Physics sits midweek for regular revision", "Planner"],
      ["Tuesday practical block is strongest", "Positive"],
      ["Friday is lighter for catch-up study", "Useful"]
    ],
    insight: "The timetable leaves enough room to add extra Physics practice without overwhelming the week."
  },
  "exam-schedule": {
    description: "Upcoming examination plan for Ananya Jain.",
    stats: [
      { value: "5", label: "Exams Scheduled" },
      { value: "18 Apr", label: "First Paper" },
      { value: "1", label: "Paper at Risk" }
    ],
    rows: [
      ["18 Apr 2026", "09:00 - 12:00", "Introduction to CSE", "Hall 3"],
      ["21 Apr 2026", "09:00 - 12:00", "Computer System Organization", "Hall 2"],
      ["24 Apr 2026", "09:00 - 12:00", "Statistics, Probability and Calculus", "Hall 1"],
      ["28 Apr 2026", "09:00 - 12:00", "Applied Physics", "Hall 4"]
    ],
    bullets: [
      ["Applied Physics needs the deepest preparation", "Priority"],
      ["Theory papers are spaced reasonably", "Relief"],
      ["Lab-linked subjects are comparatively safer", "Positive"]
    ],
    insight: "Physics is the decisive paper for Ananya, while the rest of the exam plan is more stable."
  }
},

  dev: {
    "assessment-marks": {
      description: "Internal marks snapshot for Dev Shrotiya in semester 1.",
      stats: [
        { value: "7.12", label: "SGPA Aligned" },
        { value: "10", label: "Papers Tracked" },
        { value: "A+", label: "Best Internal Grade" }
      ],
      rows: [
        ["Python for AI-ML", "Internal Test 2", "Raghav Chaturvedi", "18 / 20"],
        ["Introduction to CSE", "Mid Term", "Meenal Saxena", "14 / 20"],
        ["Program Development Using C", "Lab Review", "Apoorva Nair", "19 / 20"],
        ["Applied Physics", "Class Test", "S. K. Tiwari", "15 / 20"]
      ],
      bullets: [
        ["Python for AI-ML lab marks uploaded", "Today"],
        ["Communication Skills practical updated", "2 days ago"],
        ["Statistics tutorial sheet released", "This week"]
      ],
      insight: "Dev's strongest semester 1 performance is still in lab and applied coursework, which matches the marksheet."
    },
    "assignments": {
      description: "Assignment status for Dev Shrotiya across semester 1 subjects.",
      stats: [
        { value: "3", label: "Pending Tasks" },
        { value: "9", label: "Submitted" },
        { value: "2", label: "Due This Week" }
      ],
      rows: [
        ["Python for AI-ML", "List Processing Notebook", "08 Apr 2026", "Pending"],
        ["Introduction to CSE", "Hardware Generations Write-up", "06 Apr 2026", "Submitted"],
        ["Statistics, Probability and Calculus", "Probability Worksheet", "10 Apr 2026", "In Review"],
        ["Applied Physics", "Wave Optics Lab File", "12 Apr 2026", "Pending"]
      ],
      bullets: [
        ["Upload PDF and source files together", "Reminder"],
        ["Use plagiarism report before final submit", "Recommended"],
        ["Late penalty starts after 11:59 PM", "Policy"]
      ],
      insight: "Dev should prioritize Physics and Statistics first to avoid late-week bunching."
    },
    "attendance-status": {
      description: "Course-wise attendance summary for Dev Shrotiya.",
      stats: [
        { value: "90%", label: "Overall Attendance" },
        { value: "75%", label: "Minimum Required" },
        { value: "10", label: "Papers Counted" }
      ],
      rows: [
        ["Python for AI-ML", "28", "26", "92.8%"],
        ["Introduction to CSE", "30", "25", "83.3%"],
        ["Statistics, Probability and Calculus", "32", "29", "90.6%"],
        ["Applied Physics", "34", "31", "91.1%"]
      ],
      bullets: [
        ["No detention warning generated", "Safe"],
        ["Introduction to CSE needs better consistency", "Watch"],
        ["Current trend improving week over week", "Positive"]
      ],
      insight: "Dev's attendance remains safely above the minimum threshold."
    },
    "current-backlog": {
      description: "Backlog snapshot for Dev Shrotiya based on semester 1 standing.",
      stats: [
        { value: "0", label: "Open Backlog" },
        { value: "0", label: "Cleared Earlier" },
        { value: "Good", label: "Standing" }
      ],
      rows: [
        ["Python for AI-ML", "Semester I", "Cleared", "No action"],
        ["Introduction to CSE", "Semester I", "Cleared", "No action"],
        ["Program Development Using C", "Semester I", "Cleared", "No action"],
        ["Communication Skills", "Semester I", "Cleared", "No action"]
      ],
      bullets: [
        ["No active backlog is shown in the marksheet", "Clear"],
        ["All semester 1 papers earned credit", "Verified"],
        ["Continue same pace into semester 2", "Advice"]
      ],
      insight: "Dev has a clean semester 1 standing with no backlog."
    },
    "time-table": {
      description: "Weekly class schedule for Dev Shrotiya's semester 1 section.",
      stats: [
        { value: "24", label: "Weekly Lectures" },
        { value: "3", label: "Lab Blocks" },
        { value: "A-103", label: "Main Room" }
      ],
      rows: [
        ["Monday", "08:15 - 09:15", "Python for AI-ML", "A-103"],
        ["Tuesday", "10:15 - 12:15", "Introduction to CSE Lab", "CL-1"],
        ["Wednesday", "01:00 - 02:00", "Statistics, Probability and Calculus", "A-103"],
        ["Friday", "11:15 - 12:15", "Applied Physics", "PHY-2"]
      ],
      bullets: [
        ["Longest day is Tuesday", "5 sessions"],
        ["Thursday afternoon is lighter for self-study", "Free slot"],
        ["Physics lab file must be carried on Friday", "Reminder"]
      ],
      insight: "Dev's timetable is balanced with a slightly heavier early week."
    },
    "exam-schedule": {
      description: "Upcoming examination plan for Dev Shrotiya.",
      stats: [
        { value: "5", label: "Exams Scheduled" },
        { value: "18 Apr", label: "First Paper" },
        { value: "7 days", label: "Prep Window" }
      ],
      rows: [
        ["18 Apr 2026", "09:00 - 12:00", "Python for AI-ML", "Auditorium A"],
        ["21 Apr 2026", "09:00 - 12:00", "Introduction to CSE", "Hall 3"],
        ["24 Apr 2026", "09:00 - 12:00", "Statistics, Probability and Calculus", "Hall 2"],
        ["28 Apr 2026", "09:00 - 12:00", "Applied Physics", "Hall 4"]
      ],
      bullets: [
        ["Python for AI-ML opens the cycle", "Start here"],
        ["Two-day gap before Applied Physics", "Useful"],
        ["Seating plan expected next week", "Pending"]
      ],
      insight: "Dev has enough spacing between theory papers for targeted revision."
    }
  },
  tejas: {
  "assessment-marks": {
    description: "Internal marks snapshot for Tejas Lohana in semester 1, now reflecting weaker theory performance in Applied Physics.",
    stats: [
      { value: "6.20", label: "SGPA Aligned" },
      { value: "10", label: "Papers Tracked" },
      { value: "A", label: "Best Internal Grade" }
    ],
    rows: [
      ["Computer System Organization", "Internal Test 2", "Vikas Bansal", "16 / 20"],
      ["Computer System Organization Lab", "Lab Review", "Vikas Bansal", "19 / 20"],
      ["Program Development Using C", "Coding Practical", "Apoorva Nair", "18 / 20"],
      ["Applied Physics", "Unit Test", "S. K. Tiwari", "08 / 20"]
    ],
    bullets: [
      ["CSO lab marks uploaded", "Today"],
      ["Applied Physics theory remains below target", "Alert"],
      ["R&D activity sheet graded", "This week"]
    ],
    insight: "Tejas still performs well in labs and systems work, but Physics theory has become the main academic risk."
  },
  "assignments": {
    description: "Assignment status for Tejas Lohana across semester 1 subjects.",
    stats: [
      { value: "2", label: "Pending Tasks" },
      { value: "10", label: "Submitted" },
      { value: "1", label: "Due This Week" }
    ],
    rows: [
      ["Computer System Organization", "Memory Hierarchy Note", "07 Apr 2026", "Submitted"],
      ["Program Development Using C", "Menu Driven Program", "09 Apr 2026", "Pending"],
      ["Applied Physics", "Diffraction Record", "11 Apr 2026", "In Review"],
      ["R&D and Administration", "Innovation Brief", "12 Apr 2026", "Pending"]
    ],
    bullets: [
      ["Programming file still editable", "Open"],
      ["Most theory submissions already checked", "Stable"],
      ["Use final PDF export for R&D brief", "Tip"]
    ],
    insight: "Tejas still has manageable coursework, but Physics revision has to sit at the top of the list now."
  },
  "attendance-status": {
    description: "Course-wise attendance summary for Tejas Lohana.",
    stats: [
      { value: "92%", label: "Overall Attendance" },
      { value: "75%", label: "Minimum Required" },
      { value: "10", label: "Papers Counted" }
    ],
    rows: [
      ["Computer System Organization", "30", "28", "93.3%"],
      ["Program Development Using C", "26", "24", "92.3%"],
      ["Applied Physics", "34", "31", "91.1%"],
      ["Communication Skills", "22", "20", "90.9%"]
    ],
    bullets: [
      ["No low-attendance warning present", "Safe"],
      ["Practical attendance is especially strong", "Positive"],
      ["Keep pace through exam week", "Reminder"]
    ],
    insight: "Attendance remains steady, so the problem is academic performance in Physics rather than attendance."
  },
  "current-backlog": {
    description: "Backlog snapshot for Tejas Lohana based on semester 1 standing.",
    stats: [
      { value: "1", label: "Open Backlog" },
      { value: "0", label: "Cleared Earlier" },
      { value: "Fail", label: "Standing" }
    ],
    rows: [
      ["Applied Physics", "Semester I", "Backlog", "Prepare for reappear"],
      ["Computer System Organization", "Semester I", "Cleared", "No action"],
      ["Program Development Using C", "Semester I", "Cleared", "No action"],
      ["R&D and Administration", "Semester I", "Cleared", "No action"]
    ],
    bullets: [
      ["Applied Physics theory is the only uncleared paper", "Critical"],
      ["15 of 19 credits are earned", "Summary"],
      ["Lab subjects remain securely cleared", "Positive"]
    ],
    insight: "Tejas now has a single Physics backlog, while the rest of semester 1 remains cleared."
  },
  "time-table": {
    description: "Weekly class schedule for Tejas Lohana's semester 1 section.",
    stats: [
      { value: "24", label: "Weekly Lectures" },
      { value: "3", label: "Lab Blocks" },
      { value: "B-102", label: "Main Room" }
    ],
    rows: [
      ["Monday", "09:15 - 10:15", "Computer System Organization", "B-102"],
      ["Tuesday", "01:15 - 03:15", "Computer System Organization Lab", "CL-2"],
      ["Wednesday", "11:15 - 12:15", "Program Development Using C", "B-102"],
      ["Friday", "10:15 - 11:15", "Applied Physics", "PHY-1"]
    ],
    bullets: [
      ["Tuesday carries the heaviest lab load", "Planner"],
      ["Friday Physics slot should be used for extra doubt-solving", "Advice"],
      ["Programming remains the steadier subject", "Positive"]
    ],
    insight: "Tejas should use the Friday Physics slot as a recovery anchor while keeping his stronger practical rhythm intact."
  },
  "exam-schedule": {
    description: "Upcoming examination plan for Tejas Lohana.",
    stats: [
      { value: "5", label: "Exams Scheduled" },
      { value: "18 Apr", label: "First Paper" },
      { value: "1", label: "Paper at Risk" }
    ],
    rows: [
      ["18 Apr 2026", "09:00 - 12:00", "Computer System Organization", "Hall 2"],
      ["21 Apr 2026", "09:00 - 12:00", "Program Development Using C", "Hall 3"],
      ["24 Apr 2026", "09:00 - 12:00", "Statistics, Probability and Calculus", "Hall 1"],
      ["28 Apr 2026", "09:00 - 12:00", "Applied Physics", "Hall 4"]
    ],
    bullets: [
      ["Applied Physics needs the deepest preparation", "Priority"],
      ["Systems and lab-linked papers are relatively safer", "Positive"],
      ["Use the exam gap to focus on Physics theory questions", "Plan"]
    ],
    insight: "Tejas now needs a recovery-focused exam plan, with Physics receiving the highest revision priority."
  }
  },
  riteek: {
    "assessment-marks": {
      description: "Internal marks snapshot for Riteek Aakash Saravgeer in semester 1.",
      stats: [
        { value: "7.37", label: "SGPA Aligned" },
        { value: "10", label: "Papers Tracked" },
        { value: "A+", label: "Best Internal Grade" }
      ],
      rows: [
        ["Computer System Organization", "Internal Test 2", "Vikas Bansal", "17 / 20"],
        ["Computer System Organization Lab", "Lab Review", "Vikas Bansal", "20 / 20"],
        ["Program Development Using C", "Coding Practical", "Apoorva Nair", "18 / 20"],
        ["Statistics, Probability and Calculus", "Problem Sheet", "Nidhi Bhatt", "16 / 20"]
      ],
      bullets: [
        ["CSO lab received top practical score", "Today"],
        ["R&D activity score published", "2 days ago"],
        ["Applied Physics internal marked", "This week"]
      ],
      insight: "Riteek's internal performance is strongest in lab and programming-oriented papers."
    },
    "assignments": {
      description: "Assignment status for Riteek Aakash Saravgeer across semester 1 subjects.",
      stats: [
        { value: "2", label: "Pending Tasks" },
        { value: "10", label: "Submitted" },
        { value: "1", label: "Due This Week" }
      ],
      rows: [
        ["Computer System Organization", "ALU Architecture Write-up", "07 Apr 2026", "Submitted"],
        ["Program Development Using C", "Pattern Logic Program", "09 Apr 2026", "Pending"],
        ["Applied Physics", "Experiment Observation File", "11 Apr 2026", "Submitted"],
        ["R&D and Administration", "Research Summary Note", "12 Apr 2026", "Pending"]
      ],
      bullets: [
        ["Programming assignment needs final cleanup", "Open"],
        ["Most written work is already reviewed", "Stable"],
        ["R&D summary should stay concise", "Tip"]
      ],
      insight: "Riteek’s remaining work is concentrated in one coding task and one short R&D submission."
    },
    "attendance-status": {
      description: "Course-wise attendance summary for Riteek Aakash Saravgeer.",
      stats: [
        { value: "91%", label: "Overall Attendance" },
        { value: "75%", label: "Minimum Required" },
        { value: "10", label: "Papers Counted" }
      ],
      rows: [
        ["Computer System Organization", "30", "27", "90.0%"],
        ["Program Development Using C", "26", "24", "92.3%"],
        ["Applied Physics", "34", "31", "91.1%"],
        ["Communication Skills", "22", "20", "90.9%"]
      ],
      bullets: [
        ["No attendance shortage visible", "Safe"],
        ["Programming attendance is strongest", "Positive"],
        ["Maintain consistency through exam prep", "Reminder"]
      ],
      insight: "Riteek’s attendance is comfortably safe and steady across both theory and practical papers."
    },
    "current-backlog": {
      description: "Backlog snapshot for Riteek Aakash Saravgeer based on semester 1 standing.",
      stats: [
        { value: "0", label: "Open Backlog" },
        { value: "0", label: "Cleared Earlier" },
        { value: "Pass", label: "Standing" }
      ],
      rows: [
        ["Computer System Organization", "Semester I", "Cleared", "No action"],
        ["Program Development Using C", "Semester I", "Cleared", "No action"],
        ["Applied Physics", "Semester I", "Cleared", "No action"],
        ["R&D and Administration", "Semester I", "Cleared", "No action"]
      ],
      bullets: [
        ["No backlog recorded", "Clear"],
        ["All 19 credits earned", "Verified"],
        ["Semester closed with healthy standing", "Positive"]
      ],
      insight: "Riteek has a clean semester 1 outcome with no carry-forward papers."
    },
    "time-table": {
      description: "Weekly class schedule for Riteek Aakash Saravgeer's semester 1 section.",
      stats: [
        { value: "24", label: "Weekly Lectures" },
        { value: "3", label: "Lab Blocks" },
        { value: "B-203", label: "Main Room" }
      ],
      rows: [
        ["Monday", "09:15 - 10:15", "Computer System Organization", "B-203"],
        ["Tuesday", "01:15 - 03:15", "Computer System Organization Lab", "CL-2"],
        ["Wednesday", "10:15 - 11:15", "Program Development Using C", "B-203"],
        ["Friday", "11:15 - 12:15", "Applied Physics", "PHY-2"]
      ],
      bullets: [
        ["Tuesday has the longest lab block", "Planner"],
        ["Wednesday is best for coding revision", "Tip"],
        ["Physics slot needs practical record", "Reminder"]
      ],
      insight: "Riteek’s timetable is practical-heavy and pairs well with his performance strengths."
    },
    "exam-schedule": {
      description: "Upcoming examination plan for Riteek Aakash Saravgeer.",
      stats: [
        { value: "5", label: "Exams Scheduled" },
        { value: "18 Apr", label: "First Paper" },
        { value: "7 days", label: "Prep Window" }
      ],
      rows: [
        ["18 Apr 2026", "09:00 - 12:00", "Computer System Organization", "Hall 2"],
        ["21 Apr 2026", "09:00 - 12:00", "Program Development Using C", "Hall 3"],
        ["24 Apr 2026", "09:00 - 12:00", "Statistics, Probability and Calculus", "Hall 1"],
        ["28 Apr 2026", "09:00 - 12:00", "Applied Physics", "Hall 4"]
      ],
      bullets: [
        ["CSO starts the exam cycle", "Start here"],
        ["Programming paper should include dry runs", "Tip"],
        ["Seating plan expected next week", "Pending"]
      ],
      insight: "Riteek should begin with CSO revision and then move through the practical-linked papers."
    }
  }
};

const navSections = [
  {
    id: "academic",
    label: "Academic",
    icon: "🎓",
    color: "#6fa8ff",
    items: [
      {
        id: "assessment-marks",
        label: "Assessment Marks",
        tag: "Academic",
        description: "Internal marks snapshot for continuous evaluation subjects in the current semester.",
        stats: [
          { value: "7.12", label: "SGPA Aligned" },
          { value: "6", label: "Subjects Tracked" },
          { value: "A+", label: "Best Internal Grade" }
        ],
        tableTitle: "Assessment Details",
        columns: ["Subject", "Assessment", "Faculty", "Score"],
        rows: [
          ["Python for AI-ML", "Internal Test 2", "Raghav Chaturvedi", "18 / 20"],
          ["Introduction to CSE", "Mid Term", "Meenal Saxena", "14 / 20"],
          ["Program Development Using C", "Lab Review", "Apoorva Nair", "19 / 20"],
          ["Applied Physics", "Class Test", "S. K. Tiwari", "15 / 20"]
        ],
        listTitle: "Recent Notes",
        bullets: [
          ["Python for AI-ML lab marks uploaded", "Today"],
          ["Communication Skills practical updated", "2 days ago"],
          ["Statistics tutorial sheet released", "This week"]
        ],
        insight: "Performance is strongest in labs and skill-based courses, which lines up with the semester 1 marksheet."
      },
      {
        id: "assignments",
        label: "Assignments",
        tag: "Academic",
        description: "Upcoming and recently submitted assignment work across core and lab courses.",
        stats: [
          { value: "3", label: "Pending Tasks" },
          { value: "9", label: "Submitted" },
          { value: "2", label: "Due This Week" }
        ],
        tableTitle: "Assignment Tracker",
        columns: ["Course", "Topic", "Due Date", "Status"],
        rows: [
          ["Python for AI-ML", "List Processing Notebook", "08 Apr 2026", "Pending"],
          ["Introduction to CSE", "Hardware Generations Write-up", "06 Apr 2026", "Submitted"],
          ["Statistics, Probability and Calculus", "Probability Worksheet", "10 Apr 2026", "In Review"],
          ["Applied Physics", "Wave Optics Lab File", "12 Apr 2026", "Pending"]
        ],
        listTitle: "Tips",
        bullets: [
          ["Upload PDF and source files together", "Reminder"],
          ["Use plagiarism report before final submit", "Recommended"],
          ["Late penalty starts after 11:59 PM", "Policy"]
        ],
        insight: "Two heavier theory assignments are still open, so Physics and Statistics should be prioritized first."
      },
      {
        id: "attendance-status",
        label: "Attendance Status",
        tag: "Academic",
        description: "Course-wise attendance summary with proxy-safe sample numbers.",
        stats: [
          { value: "90%", label: "Overall Attendance" },
          { value: "75%", label: "Minimum Required" },
          { value: "6", label: "Active Courses" }
        ],
        tableTitle: "Attendance Sheet",
        columns: ["Course", "Held", "Present", "Attendance"],
        rows: [
          ["Python for AI-ML", "28", "26", "92.8%"],
          ["Introduction to CSE", "30", "25", "83.3%"],
          ["Statistics, Probability and Calculus", "32", "29", "90.6%"],
          ["Applied Physics", "34", "31", "91.1%"]
        ],
        listTitle: "Alerts",
        bullets: [
          ["No detention warning generated", "Safe"],
          ["Introduction to CSE needs better consistency", "Watch"],
          ["Current trend improving week over week", "Positive"]
        ],
        insight: "Attendance remains safely above minimum thresholds, with only Introduction to CSE needing closer attention."
      },
      {
        id: "current-backlog",
        label: "Current Backlog",
        tag: "Academic",
        description: "Backlog and carry-forward snapshot for previous semester sample data.",
        stats: [
          { value: "0", label: "Open Backlog" },
          { value: "0", label: "Cleared Earlier" },
          { value: "Good", label: "Standing" }
        ],
        tableTitle: "Backlog Register",
        columns: ["Paper", "Semester", "Status", "Next Action"],
        rows: [
          ["Python for AI-ML", "Semester I", "Cleared", "No action"],
          ["Introduction to CSE", "Semester I", "Cleared", "No action"],
          ["Applied Physics", "Semester I", "Cleared", "No action"],
          ["Communication Skills", "Semester I", "Cleared", "No action"]
        ],
        listTitle: "Focus Areas",
        bullets: [
          ["No active backlog is shown in the marksheet", "Clear"],
          ["All semester 1 papers earned credit", "Verified"],
          ["Continue same pace into semester 2", "Advice"]
        ],
        insight: "The semester 1 result shows a clean standing with full earned credits and no active backlog."
      },
      {
        id: "exam-result",
        label: "Exam Result",
        tag: "Academic",
        description: "Semester 1 result summary synchronized with the detailed statement of marks page.",
        stats: [
          { value: "7.12", label: "Semester 1 SGPA" },
          { value: "7.12", label: "Current CGPA" },
          { value: "19", label: "Total Credits" },
          { value: "19", label: "Earned Credits" },
          { value: "A+", label: "Best Grade" }
        ],
        tableTitle: "Result Sheet",
        columns: ["Course Code", "Course", "Credits", "Earned", "Total Grade"],
        rows: [
          ["BTAIML101N", "Python for AI-ML", "3", "3", "A"],
          ["BTAIML101N(P)", "Python for AI-ML Lab", "1", "1", "A+"],
          ["BTCS101M", "Introduction to Computer Science and Engineering", "3", "3", "B+"],
          ["BTCS101M(P)", "Introduction to Computer Science and Engineering Lab", "1", "1", "A"],
          ["BTCS107M", "Program Development Using C", "1", "1", "A"],
          ["BTCSH102", "Statistics, Probability and Calculus", "3", "3", "B"],
          ["BTPH101", "Applied Physics", "4", "4", "B+"],
          ["BTPH101(P)", "Applied Physics Lab", "1", "1", "A"],
          ["HUCS101", "Communication Skills", "1", "1", "B+"],
          ["HUCS101(P)", "Communication Skills Lab", "1", "1", "A"]
        ],
        listTitle: "Result Insights",
        bullets: [
          ["Result status is PASS", "Verified"],
          ["All 19 credits were earned successfully", "Positive"],
          ["Best scoring areas were lab-oriented courses", "Insight"]
        ],
        insight: "The dashboard result summary now mirrors the semester 1 marksheet: PASS result, SGPA 7.12, CGPA 7.12, and all 19 credits earned.",
        actions: [
          {
            label: "Sem 1 Result",
            description: "Open the detailed semester 1 statement of marks in a separate page.",
            href: "./semester-1-result.html",
            cta: "View marksheet"
          }
        ]
      },
      {
        id: "plagiarism-check",
        label: "Plagiarism Check",
        tag: "Academic",
        description: "Similarity screening overview for submitted coursework.",
        stats: [
          { value: "7%", label: "Latest Similarity" },
          { value: "15%", label: "Allowed Threshold" },
          { value: "5", label: "Reports Generated" }
        ],
        tableTitle: "Similarity Reports",
        columns: ["Submission", "Course", "Similarity", "Verdict"],
        rows: [
          ["Notebook 1", "Python for AI-ML", "7%", "Accepted"],
          ["Lab Report 2", "Applied Physics Lab", "5%", "Accepted"],
          ["Seminar Draft", "Communication Skills", "11%", "Accepted"],
          ["Worksheet 3", "Statistics, Probability and Calculus", "13%", "Review"]
        ],
        listTitle: "Best Practices",
        bullets: [
          ["Cite diagrams and tables properly", "Reminder"],
          ["Avoid copied problem statements in body text", "Guideline"],
          ["Check references before final submission", "Recommended"]
        ],
        insight: "All semester 1 submissions are within safe limits, though the statistics worksheet should be checked once more before reuse."
      },
      {
        id: "time-table",
        label: "Time Table",
        tag: "Academic",
        description: "Weekly class schedule sample with teaching slots and rooms.",
        stats: [
          { value: "24", label: "Weekly Lectures" },
          { value: "3", label: "Lab Blocks" },
          { value: "A-103", label: "Main Room" }
        ],
        tableTitle: "Weekly Schedule",
        columns: ["Day", "Time", "Course", "Room"],
        rows: [
          ["Monday", "08:15 - 09:15", "Python for AI-ML", "A-103"],
          ["Tuesday", "10:15 - 12:15", "Introduction to CSE Lab", "CL-1"],
          ["Wednesday", "01:00 - 02:00", "Statistics, Probability and Calculus", "A-103"],
          ["Friday", "11:15 - 12:15", "Applied Physics", "PHY-2"]
        ],
        listTitle: "Planner",
        bullets: [
          ["Longest day is Tuesday", "5 sessions"],
          ["Thursday afternoon is lighter for self-study", "Free slot"],
          ["Physics lab file must be carried on Friday", "Reminder"]
        ],
        insight: "The semester 1 timetable is balanced across theory and practical sessions, with early-week academic load slightly higher."
      },
      {
        id: "exam-schedule",
        label: "Exam Schedule",
        tag: "Academic",
        description: "Upcoming examination plan with sample timings and venues.",
        stats: [
          { value: "5", label: "Exams Scheduled" },
          { value: "18 Apr", label: "First Paper" },
          { value: "7 days", label: "Prep Window" }
        ],
        tableTitle: "Exam Calendar",
        columns: ["Date", "Time", "Subject", "Venue"],
        rows: [
          ["18 Apr 2026", "09:00 - 12:00", "Python for AI-ML", "Auditorium A"],
          ["21 Apr 2026", "09:00 - 12:00", "Introduction to CSE", "Hall 3"],
          ["24 Apr 2026", "09:00 - 12:00", "Statistics, Probability and Calculus", "Hall 2"],
          ["28 Apr 2026", "09:00 - 12:00", "Applied Physics", "Hall 4"]
        ],
        listTitle: "Preparation Notes",
        bullets: [
          ["Python for AI-ML opens the cycle", "Start here"],
          ["Two-day gap before Applied Physics", "Useful"],
          ["Seating plan expected next week", "Pending"]
        ],
        insight: "The schedule matches a typical semester 1 structure and gives enough space to revise theory papers between exams."
      }
    ]
  },
  {
    id: "fees",
    label: "Fees",
    icon: "₹",
    color: "#b193e3",
    items: [
      {
        id: "fees-receipts",
        label: "Fees Receipts",
        tag: "Fees",
        description: "Downloadable payment receipt samples for recent semester transactions.",
        stats: [
          { value: "3", label: "Receipts Available" },
          { value: "₹86,500", label: "Latest Payment" },
          { value: "Cleared", label: "Status" }
        ],
        tableTitle: "Receipt Ledger",
        columns: ["Receipt No.", "Date", "Amount", "Mode"],
        rows: [
          ["RCPT-2401", "15 Mar 2026", "₹86,500", "UPI"],
          ["RCPT-1988", "08 Jan 2026", "₹12,000", "Net Banking"],
          ["RCPT-1544", "16 Aug 2025", "₹74,500", "Card"],
          ["RCPT-1011", "02 Jul 2025", "₹8,000", "UPI"]
        ],
        listTitle: "Notes",
        bullets: [
          ["Semester fee receipt signed digitally", "Ready"],
          ["Hostel receipt separate from tuition", "Info"],
          ["Duplicate download enabled", "Available"]
        ],
        insight: "All recent receipts are marked successful, so the account appears financially compliant."
      },
      {
        id: "online-fee-transaction",
        label: "Online Fee Transaction",
        tag: "Fees",
        description: "Recent online payment attempts with sample gateway results.",
        stats: [
          { value: "5", label: "Transactions" },
          { value: "1", label: "Pending Reconcile" },
          { value: "UPI", label: "Preferred Mode" }
        ],
        tableTitle: "Gateway Activity",
        columns: ["Txn ID", "Date", "Amount", "Result"],
        rows: [
          ["UPI24818", "15 Mar 2026", "₹86,500", "Success"],
          ["NB11204", "14 Mar 2026", "₹86,500", "Failed"],
          ["UPI24101", "08 Jan 2026", "₹12,000", "Success"],
          ["CC88142", "07 Jan 2026", "₹12,000", "Pending"]
        ],
        listTitle: "Gateway Updates",
        bullets: [
          ["Pending card transaction auto-closes in 48 hrs", "Policy"],
          ["Retry limit is three attempts per day", "Limit"],
          ["UPI handles fastest confirmation", "Tip"]
        ],
        insight: "Only one transaction still needs reconciliation; all dues remain covered by successful payments."
      },
      {
        id: "pay-fee-online",
        label: "Pay Fee Online",
        tag: "Fees",
        description: "Sample online payment plan with due amounts and installment options.",
        stats: [
          { value: "₹12,000", label: "Next Due" },
          { value: "20 Apr", label: "Due Date" },
          { value: "2", label: "Installments Left" }
        ],
        tableTitle: "Installment Plan",
        columns: ["Head", "Due", "Amount", "Status"],
        rows: [
          ["Transport", "20 Apr 2026", "₹6,000", "Upcoming"],
          ["Library Security", "20 Apr 2026", "₹2,000", "Upcoming"],
          ["Activity Fee", "20 Apr 2026", "₹4,000", "Upcoming"],
          ["Tuition", "15 Mar 2026", "₹86,500", "Paid"]
        ],
        listTitle: "Payment Options",
        bullets: [
          ["UPI, card, and net banking accepted", "Modes"],
          ["Auto receipt generated within 5 minutes", "Process"],
          ["EMI option available above ₹25,000", "Facility"]
        ],
        insight: "The next due amount is small relative to the semester tuition, so it can be cleared in a single transaction easily."
      },
      {
        id: "student-ledger",
        label: "Student Ledger",
        tag: "Fees",
        description: "Sample statement showing debit and credit movements across the academic year.",
        stats: [
          { value: "₹0", label: "Outstanding" },
          { value: "₹1,80,000", label: "Yearly Turnover" },
          { value: "Good", label: "Standing" }
        ],
        tableTitle: "Ledger Statement",
        columns: ["Date", "Particular", "Debit", "Credit"],
        rows: [
          ["02 Jul 2025", "Admission Fee", "₹82,500", "-"],
          ["02 Jul 2025", "Payment Received", "-", "₹82,500"],
          ["15 Mar 2026", "Semester Tuition", "₹86,500", "-"],
          ["15 Mar 2026", "Payment Received", "-", "₹86,500"]
        ],
        listTitle: "Ledger Flags",
        bullets: [
          ["No overdue debit remains", "Clean"],
          ["All major payments matched", "Verified"],
          ["Transport dues posted separately", "Info"]
        ],
        insight: "The ledger is balanced with no visible outstanding amount, which is the ideal status before exams."
      }
    ]
  },
  {
    id: "general-info",
    label: "General Info.",
    icon: "◔",
    color: "#f0d66f",
    items: [
      {
        id: "abcid-verification",
        label: "ABCID Verification",
        tag: "General Info.",
        description: "Sample digital verification status for academic bank of credits linkage.",
        stats: [
          { value: "Verified", label: "ABCID Status" },
          { value: "01 Apr", label: "Last Sync" },
          { value: "Active", label: "Account State" }
        ],
        tableTitle: "Verification Log",
        columns: ["Step", "Date", "Officer", "Status"],
        rows: [
          ["Identity Match", "28 Mar 2026", "ERP Cell", "Completed"],
          ["Document Validation", "29 Mar 2026", "Academic Admin", "Completed"],
          ["Portal Sync", "01 Apr 2026", "Automation Service", "Completed"],
          ["Final Review", "01 Apr 2026", "Registrar Desk", "Approved"]
        ],
        listTitle: "Checklist",
        bullets: [
          ["Aadhaar-linked mobile confirmed", "Done"],
          ["Name matched with university record", "Done"],
          ["No pending discrepancy flag", "Clear"]
        ],
        insight: "ABCID linkage is fully complete, so credit portability should not face administrative blocks."
      },
      {
        id: "contact-details",
        label: "Contact Details",
        tag: "General Info.",
        description: "Student address and emergency contact sample information page.",
        stats: [
          { value: "2", label: "Emergency Contacts" },
          { value: "Indore", label: "Current City" },
          { value: "Updated", label: "Profile State" }
        ],
        tableTitle: "Registered Contacts",
        columns: ["Type", "Name", "Phone", "Notes"],
        rows: [
          ["Primary Guardian", "Vishal Jain", "+91 98XXXXXX21", "Father"],
          ["Emergency", "Anita Jain", "+91 97XXXXXX14", "Mother"],
          ["Local Guardian", "Ritesh Soni", "+91 96XXXXXX18", "Family Friend"],
          ["Student", "Ananya Jain", "+91 95XXXXXX77", "Self"]
        ],
        listTitle: "Profile Reminders",
        bullets: [
          ["Address proof expires in June", "Renew soon"],
          ["Emergency contacts validated last month", "Fresh"],
          ["Email ID linked with parent portal", "Synced"]
        ],
        insight: "Contact records are complete and redundant enough to cover emergency communication needs."
      },
      {
        id: "grievance",
        label: "Grievance",
        tag: "General Info.",
        description: "Illustrative grievance tickets and status trail.",
        stats: [
          { value: "2", label: "Closed Tickets" },
          { value: "1", label: "Open Ticket" },
          { value: "36 hrs", label: "Avg Resolution" }
        ],
        tableTitle: "Ticket Register",
        columns: ["Ticket", "Department", "Raised On", "Status"],
        rows: [
          ["GRV-2041", "Transport", "31 Mar 2026", "Open"],
          ["GRV-1994", "Library", "10 Mar 2026", "Closed"],
          ["GRV-1820", "Hostel", "12 Feb 2026", "Closed"],
          ["GRV-1777", "Academic", "05 Feb 2026", "Resolved"]
        ],
        listTitle: "Support Notes",
        bullets: [
          ["Open ticket relates to route timing", "Pending"],
          ["Escalation available after 72 hours", "Policy"],
          ["Closed tickets archived automatically", "Info"]
        ],
        insight: "Support response looks healthy overall, with only one non-critical grievance still in progress."
      },
      {
        id: "news-notices",
        label: "News/Notices",
        tag: "General Info.",
        description: "Campus circulars and administrative notice samples.",
        stats: [
          { value: "7", label: "Unread Notices" },
          { value: "2", label: "Urgent" },
          { value: "Today", label: "Latest Update" }
        ],
        tableTitle: "Notice Board",
        columns: ["Notice", "Department", "Published", "Priority"],
        rows: [
          ["Mid-semester registration window", "Academic Office", "03 Apr 2026", "High"],
          ["Library timings revised", "Library", "02 Apr 2026", "Normal"],
          ["Bus route adjustment for exams", "Transport", "01 Apr 2026", "High"],
          ["Hostel maintenance block notice", "Hostel", "30 Mar 2026", "Normal"]
        ],
        listTitle: "Reader Tips",
        bullets: [
          ["Urgent notices stay pinned for 48 hours", "Rule"],
          ["Unread items highlighted in blue", "UI"],
          ["PDF download available per notice", "Feature"]
        ],
        insight: "The most important notices right now are administrative registration and transport changes."
      },
      {
        id: "online-form-approval",
        label: "Online Form Approval Status",
        tag: "General Info.",
        description: "Sample workflow status for online approvals submitted by the student.",
        stats: [
          { value: "3", label: "Forms Submitted" },
          { value: "1", label: "Awaiting Approval" },
          { value: "Dean", label: "Current Desk" }
        ],
        tableTitle: "Approval Workflow",
        columns: ["Form", "Submitted", "Current Stage", "Status"],
        rows: [
          ["Internship Permission", "02 Apr 2026", "Dean Academics", "In Progress"],
          ["Bonafide Certificate", "21 Mar 2026", "Completed", "Approved"],
          ["Exam Improvement Request", "18 Mar 2026", "Completed", "Approved"],
          ["ID Card Reissue", "11 Mar 2026", "Accounts", "Closed"]
        ],
        listTitle: "Workflow Notes",
        bullets: [
          ["Dean approval usually takes 2 working days", "SLA"],
          ["Completed forms stay downloadable", "Access"],
          ["Rejected forms can be resubmitted", "Option"]
        ],
        insight: "Only one approval is still moving, and it is already at the final decision desk."
      },
      {
        id: "other-service-request",
        label: "Other Service Request",
        tag: "General Info.",
        description: "Miscellaneous service requests raised through the portal.",
        stats: [
          { value: "4", label: "Requests Raised" },
          { value: "3", label: "Resolved" },
          { value: "1", label: "Open" }
        ],
        tableTitle: "Service Requests",
        columns: ["Request", "Raised", "Owner", "Status"],
        rows: [
          ["Wi-Fi Reset", "29 Mar 2026", "IT Support", "Resolved"],
          ["Bus Pass Print", "24 Mar 2026", "Transport", "Resolved"],
          ["Lab Access Card", "21 Mar 2026", "Admin Desk", "Resolved"],
          ["Transcript Copy", "02 Apr 2026", "Exam Cell", "Open"]
        ],
        listTitle: "Service Notes",
        bullets: [
          ["Transcript copy expected in 3 days", "ETA"],
          ["Past resolved requests remain searchable", "Convenience"],
          ["Priority is assigned by department", "System"]
        ],
        insight: "Service management is functioning smoothly, with only a transcript request still open."
      },
      {
        id: "question-paper",
        label: "Question Paper",
        tag: "General Info.",
        description: "Archived sample previous-year paper catalog.",
        stats: [
          { value: "24", label: "Papers Available" },
          { value: "4", label: "Core Subjects" },
          { value: "PDF", label: "Format" }
        ],
        tableTitle: "Paper Archive",
        columns: ["Subject", "Year", "Exam", "Download"],
        rows: [
          ["Python for AI-ML", "2025", "End Sem", "PDF"],
          ["Introduction to CSE", "2025", "Mid Sem", "PDF"],
          ["Applied Physics", "2024", "End Sem", "PDF"],
          ["Statistics, Probability and Calculus", "2024", "Mid Sem", "PDF"]
        ],
        listTitle: "Study Strategy",
        bullets: [
          ["Solve at least two latest papers first", "Tip"],
          ["Pattern repeats in long-answer section", "Observation"],
          ["Lab papers focus on logic rather than theory", "Hint"]
        ],
        insight: "Previous-year papers are strong revision material because the assessment structure appears fairly consistent."
      },
      {
        id: "study-material",
        label: "Study Material",
        tag: "General Info.",
        description: "Sample study resource collection for lecture notes and shared material.",
        stats: [
          { value: "38", label: "Resources Shared" },
          { value: "12", label: "Recent Uploads" },
          { value: "5", label: "Faculty Contributors" }
        ],
        tableTitle: "Resource Library",
        columns: ["Module", "Course", "Type", "Uploaded By"],
        rows: [
          ["Python Basics and Lists", "Python for AI-ML", "Slides", "Raghav Chaturvedi"],
          ["Computer Generations Overview", "Introduction to CSE", "Notes", "Meenal Saxena"],
          ["Probability Revision Deck", "Statistics, Probability and Calculus", "PPT", "Nidhi Bhatt"],
          ["Wave Optics Experiment Sheet", "Applied Physics", "PDF", "S. K. Tiwari"]
        ],
        listTitle: "Usage Notes",
        bullets: [
          ["Most downloaded pack is Python Basics and Lists", "Popular"],
          ["Slides updated after each unit test", "Current"],
          ["Shared drive access available off-campus", "Access"]
        ],
        insight: "The material library looks rich enough to support self-study without relying only on classroom notes."
      },
      {
        id: "syllabus",
        label: "Syllabus",
        tag: "General Info.",
        description: "Outline of semester syllabus coverage with sample completion percentages.",
        stats: [
          { value: "82%", label: "Coverage Complete" },
          { value: "6", label: "Courses Mapped" },
          { value: "2", label: "Units Pending" }
        ],
        tableTitle: "Syllabus Map",
        columns: ["Course", "Units", "Covered", "Completion"],
        rows: [
          ["Python for AI-ML", "5", "5", "100%"],
          ["Introduction to CSE", "5", "4", "80%"],
          ["Statistics, Probability and Calculus", "6", "5", "83%"],
          ["Applied Physics", "5", "4", "80%"]
        ],
        listTitle: "Completion Notes",
        bullets: [
          ["Python completed ahead of schedule", "Great"],
          ["One unit left in Applied Physics", "Pending"],
          ["Revision classes planned post completion", "Scheduled"]
        ],
        insight: "Coverage is comfortably on track, with only a couple of units remaining before full completion."
      },
      {
        id: "your-profile",
        label: "Your Profile",
        tag: "General Info.",
        description: "Sample student profile page with made-up identity and program metadata.",
        stats: [
          { value: "Semester I", label: "Current Term" },
          { value: "B.Tech AI", label: "Program" },
          { value: "Active", label: "Enrollment" }
        ],
        tableTitle: "Profile Snapshot",
        columns: ["Field", "Value", "Field", "Value"],
        rows: [
          ["Enrollment No.", "ANANYA.JAIN", "Batch", "2025-2029"],
          ["Section", "F", "Blood Group", "B+"],
          ["Mentor", "Dr. Rachna Tiwari", "Mode", "Regular"],
          ["Scholarship", "Merit Assist", "Status", "Active"]
        ],
        listTitle: "Profile Actions",
        bullets: [
          ["Photo verified for ID card", "Done"],
          ["Guardian details linked", "Done"],
          ["Bank details masked for safety", "Protected"]
        ],
        insight: "The profile is fully populated and suitable for use in most approval and verification workflows."
      }
    ]
  },
  {
    id: "placements",
    label: "Placements",
    icon: "👥",
    color: "#75abff",
    items: [
      {
        id: "career-plan",
        label: "Career Plan by Mentor",
        tag: "Placements",
        description: "Sample mentor-created roadmap for internships and skills growth.",
        stats: [
          { value: "3", label: "Milestones" },
          { value: "2", label: "Certifications Planned" },
          { value: "June", label: "Target Internship" }
        ],
        tableTitle: "Career Roadmap",
        columns: ["Phase", "Goal", "Deadline", "Status"],
        rows: [
          ["Phase 1", "Complete DSA basics", "20 Apr 2026", "In Progress"],
          ["Phase 2", "Build AI mini project", "10 May 2026", "Planned"],
          ["Phase 3", "Apply for internships", "01 Jun 2026", "Planned"],
          ["Phase 4", "Mock interview cycle", "20 Jun 2026", "Planned"]
        ],
        listTitle: "Mentor Notes",
        bullets: [
          ["Focus first on problem solving consistency", "Priority"],
          ["Portfolio should include one deployed project", "Important"],
          ["Weekly mentor check-in every Friday", "Routine"]
        ],
        insight: "The plan is practical and front-loads fundamentals before applications begin."
      },
      {
        id: "internship-permission",
        label: "Internship Permission",
        tag: "Placements",
        description: "Sample approval trail for internship application permission.",
        stats: [
          { value: "Approved", label: "Current Status" },
          { value: "2", label: "Documents Attached" },
          { value: "Startup", label: "Employer Type" }
        ],
        tableTitle: "Permission Workflow",
        columns: ["Stage", "Owner", "Date", "Decision"],
        rows: [
          ["Application Submitted", "Student", "02 Apr 2026", "Done"],
          ["Mentor Review", "Faculty Mentor", "03 Apr 2026", "Approved"],
          ["HoD Approval", "Department", "03 Apr 2026", "Approved"],
          ["Final Filing", "Placement Cell", "04 Apr 2026", "Filed"]
        ],
        listTitle: "Required Docs",
        bullets: [
          ["Offer letter uploaded", "Present"],
          ["NOC attached", "Present"],
          ["Duration within policy limit", "Valid"]
        ],
        insight: "The permission flow is fully complete, so the internship can move forward without administrative delay."
      },
      {
        id: "placement-news",
        label: "News/Notices",
        tag: "Placements",
        description: "Placement desk notifications and training announcements.",
        stats: [
          { value: "5", label: "Open Notices" },
          { value: "2", label: "Drives This Month" },
          { value: "High", label: "Alert Level" }
        ],
        tableTitle: "Placement Notices",
        columns: ["Title", "Company", "Date", "Audience"],
        rows: [
          ["Aptitude Bootcamp", "Placement Cell", "04 Apr 2026", "All"],
          ["Resume Review Week", "Placement Cell", "05 Apr 2026", "All"],
          ["Developer Drive", "TechNova", "09 Apr 2026", "CSE/AI"],
          ["Data Analyst Webinar", "QuantEdge", "12 Apr 2026", "All"]
        ],
        listTitle: "Highlights",
        bullets: [
          ["Resume clinic has limited slots", "Register"],
          ["TechNova drive prefers Python basics", "Skill fit"],
          ["Bootcamp attendance adds placement points", "Benefit"]
        ],
        insight: "The placement calendar is active, with early-stage opportunities already useful for preparation."
      },
      {
        id: "placements-record",
        label: "Placements",
        tag: "Placements",
        description: "Made-up placement outcomes and company engagement snapshot.",
        stats: [
          { value: "78%", label: "Dept. Placement Rate" },
          { value: "24", label: "Recruiters" },
          { value: "₹8.6L", label: "Median Package" }
        ],
        tableTitle: "Placement Snapshot",
        columns: ["Company", "Role", "Openings", "Package"],
        rows: [
          ["TechNova", "Software Intern", "14", "₹6.5L"],
          ["ByteForge", "Data Analyst", "8", "₹7.2L"],
          ["InfiScale", "Associate Engineer", "11", "₹9.0L"],
          ["AlgoMint", "ML Trainee", "6", "₹10.5L"]
        ],
        listTitle: "Placement Signals",
        bullets: [
          ["AI/ML roles increasing this year", "Trend"],
          ["Internship conversions highest at product firms", "Observation"],
          ["Communication rounds remain key filter", "Advice"]
        ],
        insight: "The placement environment looks healthy, especially for students building a stronger technical portfolio early."
      },
      {
        id: "placement-drive",
        label: "Placement Drive",
        tag: "Placements",
        description: "Upcoming placement drive schedule and eligibility sample page.",
        stats: [
          { value: "3", label: "Drives Open" },
          { value: "7 Apr", label: "Nearest Deadline" },
          { value: "7.0", label: "Min CGPA" }
        ],
        tableTitle: "Drive Calendar",
        columns: ["Company", "Profile", "Deadline", "Eligibility"],
        rows: [
          ["TechNova", "Software Intern", "07 Apr 2026", "CGPA 7.0+"],
          ["QuantEdge", "Data Intern", "10 Apr 2026", "CGPA 7.5+"],
          ["InfiScale", "Cloud Trainee", "12 Apr 2026", "CGPA 6.8+"],
          ["AlgoMint", "ML Intern", "15 Apr 2026", "CGPA 8.0+"]
        ],
        listTitle: "Application Notes",
        bullets: [
          ["Resume should be one page", "Rule"],
          ["Backlogs may affect some companies", "Check"],
          ["Online test links sent by email", "Process"]
        ],
        insight: "A few drives are already open, and eligibility thresholds are reachable for a steady-performing student."
      },
      {
        id: "update-profile-intern",
        label: "Update Profile For Internship",
        tag: "Placements",
        description: "Internship profile completeness view with missing-field guidance.",
        stats: [
          { value: "86%", label: "Profile Complete" },
          { value: "2", label: "Fields Missing" },
          { value: "Good", label: "Readiness" }
        ],
        tableTitle: "Profile Completion",
        columns: ["Section", "Completion", "Owner", "Status"],
        rows: [
          ["Basic Details", "100%", "Student", "Done"],
          ["Skills Matrix", "80%", "Student", "Update Needed"],
          ["Project Portfolio", "75%", "Student", "Update Needed"],
          ["Resume Upload", "100%", "Student", "Done"]
        ],
        listTitle: "To Improve",
        bullets: [
          ["Add recent Unix project", "Important"],
          ["Mention GitHub profile link", "Recommended"],
          ["Refresh skills with Python and SQL", "High value"]
        ],
        insight: "The profile is nearly ready for internships, with the biggest lift coming from stronger project detail."
      },
      {
        id: "update-profile-placement",
        label: "Update Profile For Placement",
        tag: "Placements",
        description: "Placement-specific profile readiness for final drives.",
        stats: [
          { value: "81%", label: "Profile Complete" },
          { value: "1", label: "Resume Version Pending" },
          { value: "Medium", label: "Priority" }
        ],
        tableTitle: "Placement Profile Audit",
        columns: ["Area", "Current State", "Expected", "Gap"],
        rows: [
          ["Resume", "Version 2", "Version 3", "Update"],
          ["Aptitude Score", "68%", "75%+", "Improve"],
          ["Coding Score", "74%", "80%+", "Improve"],
          ["Projects", "2 listed", "3 listed", "Add one"]
        ],
        listTitle: "Readiness Notes",
        bullets: [
          ["Resume revision should include measurable impact", "Tip"],
          ["Aptitude training next Wednesday", "Join"],
          ["One more polished project can strengthen profile", "Advice"]
        ],
        insight: "Placement readiness is solid but still benefits from a final round of polishing before major drives."
      }
    ]
  },
  {
    id: "hostel",
    label: "Hostel",
    icon: "🏠",
    color: "#8bd19a",
    items: [
      {
        id: "hostel-registration",
        label: "Hostel Registration Link",
        tag: "Hostel",
        description: "Sample hostel registration status and room allocation data.",
        stats: [
          { value: "Registered", label: "Status" },
          { value: "C-214", label: "Room Assigned" },
          { value: "2", label: "Roommates" }
        ],
        tableTitle: "Hostel Allotment",
        columns: ["Block", "Room", "Floor", "Warden"],
        rows: [
          ["C", "214", "2nd", "Mrs. Sonal Gupta"],
          ["Mess Type", "Veg", "Gate Pass", "Enabled"],
          ["Check-in", "05 Jul 2025", "Fee Status", "Paid"],
          ["Laundry Slot", "Tue/Thu", "Wi-Fi", "Active"]
        ],
        listTitle: "Hostel Notes",
        bullets: [
          ["Gate closing time is 9:30 PM", "Reminder"],
          ["Mess feedback opens every Sunday", "Routine"],
          ["Room inspection due next week", "Schedule"]
        ],
        insight: "The hostel profile is complete and the room allocation is active without any pending compliance issues."
      }
    ]
  },
  {
    id: "transportation",
    label: "Transportation",
    icon: "🚌",
    color: "#b093df",
    items: [
      {
        id: "bus-routes",
        label: "Bus Routes",
        tag: "Transportation",
        description: "Route mapping sample for college transport service.",
        stats: [
          { value: "R-07", label: "Assigned Route" },
          { value: "42 km", label: "Round Trip" },
          { value: "07:15", label: "Pickup Time" }
        ],
        tableTitle: "Route Plan",
        columns: ["Stop Order", "Location", "Pickup", "Drop"],
        rows: [
          ["1", "Vijay Nagar", "07:15", "04:35"],
          ["2", "LIG Square", "07:28", "04:20"],
          ["3", "Bhawarkua", "07:40", "04:08"],
          ["4", "Campus", "08:05", "03:45"]
        ],
        listTitle: "Route Notes",
        bullets: [
          ["Route updated for exam timing", "New"],
          ["Driver contact visible on pass", "Available"],
          ["Morning delay threshold is 10 minutes", "Policy"]
        ],
        insight: "The route is direct and should comfortably get the student to campus before first hour."
      },
      {
        id: "bus-stops",
        label: "Bus Stops",
        tag: "Transportation",
        description: "Nearby stop information with sample landmark data.",
        stats: [
          { value: "2", label: "Nearby Stops" },
          { value: "650 m", label: "Walk Distance" },
          { value: "Covered", label: "Shelter" }
        ],
        tableTitle: "Stop Directory",
        columns: ["Stop", "Landmark", "Distance", "Boarding"],
        rows: [
          ["Vijay Nagar Square", "Near SBI ATM", "650 m", "Primary"],
          ["MIG Circle", "Opp. City Mall", "1.1 km", "Alternate"],
          ["LIG Link Road", "Apollo Pharmacy", "1.4 km", "Secondary"],
          ["Bhawarkua Junction", "Bus Bay 2", "2.0 km", "Emergency"]
        ],
        listTitle: "Commuter Tips",
        bullets: [
          ["Reach stop 5 minutes early", "Advice"],
          ["Boarding QR checked by conductor", "Rule"],
          ["Alternate stop available during roadworks", "Useful"]
        ],
        insight: "The primary stop is reasonably close, and there are fallback boarding options nearby."
      }
    ]
  },
  {
    id: "library",
    label: "Library",
    icon: "📘",
    color: "#f0d66f",
    items: [
      {
        id: "circulation-ledger",
        label: "Circulation Ledger",
        tag: "Library",
        description: "Sample library circulation record for borrowed and returned books.",
        stats: [
          { value: "3", label: "Books Issued" },
          { value: "1", label: "Due Soon" },
          { value: "₹0", label: "Current Fine" }
        ],
        tableTitle: "Issue Register",
        columns: ["Book", "Issued On", "Due Date", "Status"],
        rows: [
          ["Unix Concepts and Applications", "22 Mar 2026", "06 Apr 2026", "Due Soon"],
          ["Discrete Mathematics", "18 Mar 2026", "09 Apr 2026", "Active"],
          ["Data Communications", "28 Mar 2026", "12 Apr 2026", "Active"],
          ["C++ Primer", "10 Mar 2026", "24 Mar 2026", "Returned"]
        ],
        listTitle: "Library Notes",
        bullets: [
          ["One renewal still available", "Useful"],
          ["Popular titles have shorter hold time", "Rule"],
          ["Digital reminder sent before due date", "Feature"]
        ],
        insight: "Library usage is healthy and currently free of overdue penalties."
      },
      {
        id: "fine-records",
        label: "Fine Records",
        tag: "Library",
        description: "Illustrative fine history and waiver information.",
        stats: [
          { value: "₹45", label: "Past Fine Paid" },
          { value: "₹0", label: "Outstanding" },
          { value: "2", label: "Late Returns" }
        ],
        tableTitle: "Fine Statement",
        columns: ["Book", "Days Late", "Fine", "Resolved"],
        rows: [
          ["C++ Primer", "3", "₹30", "Paid"],
          ["Signals and Systems", "2", "₹15", "Paid"],
          ["Operating Systems", "0", "₹0", "N/A"],
          ["AI Foundations", "0", "₹0", "N/A"]
        ],
        listTitle: "Fine Policy",
        bullets: [
          ["Maximum fine capped at ₹200 per title", "Rule"],
          ["Fine waiver possible during fest week", "Special"],
          ["Outstanding fine blocks new issue", "Important"]
        ],
        insight: "Past fines were minor and already settled, so there is no current lending restriction."
      },
      {
        id: "library-rules",
        label: "Library Rules & Circular",
        tag: "Library",
        description: "Sample rules and circular brief for library operations.",
        stats: [
          { value: "08:00-20:00", label: "Open Hours" },
          { value: "4", label: "Books Allowed" },
          { value: "7 days", label: "Issue Period" }
        ],
        tableTitle: "Rule Highlights",
        columns: ["Rule", "Value", "Rule", "Value"],
        rows: [
          ["Max Books", "4", "Quiet Hours", "All day"],
          ["Issue Period", "7 days", "Renewals", "1"],
          ["Reference Issue", "No", "Laptop Zone", "Yes"],
          ["ID Required", "Yes", "Sunday Access", "Exam only"]
        ],
        listTitle: "Circular Notes",
        bullets: [
          ["Bag counter compulsory", "Security"],
          ["Reference section extended during exams", "Update"],
          ["Food not allowed in reading hall", "Rule"]
        ],
        insight: "The rules are straightforward and fairly student-friendly, especially during exam periods."
      },
      {
        id: "opac",
        label: "OPAC",
        tag: "Library",
        description: "Sample online public access catalog search results.",
        stats: [
          { value: "126", label: "Results for AI" },
          { value: "18", label: "Available Now" },
          { value: "4", label: "Reserved Titles" }
        ],
        tableTitle: "Catalog Search",
        columns: ["Title", "Author", "Section", "Availability"],
        rows: [
          ["Hands-On Machine Learning", "A. Geron", "Tech Shelf", "Available"],
          ["Deep Learning with Python", "F. Chollet", "Tech Shelf", "Issued"],
          ["Artificial Intelligence: A Modern Approach", "Russell & Norvig", "Reference", "In Library"],
          ["Data Structures in C++", "M. Goodrich", "Circulation", "Available"]
        ],
        listTitle: "Search Tips",
        bullets: [
          ["Use subject keyword for broader results", "Tip"],
          ["Reference books cannot be issued", "Note"],
          ["Reservation auto-expires after 24 hours", "Rule"]
        ],
        insight: "The catalog is rich enough for both coursework and exploratory reading, with several relevant titles immediately available."
      }
    ]
  }
];

const adminNavSections = [
  {
    id: "admin-tools",
    label: "Admin Tools",
    icon: "⚙️",
    color: "#5d94ff",
    items: [
      {
        id: "user-management",
        label: "User Management",
        tag: "Administration",
        description: "Create and edit user accounts and dashboard result data directly from the site.",
        stats: [],
        tableTitle: "User Management",
        columns: [],
        rows: [],
        listTitle: "Admin Notes",
        bullets: [],
        insight: "Changes are saved locally in this browser so you can keep adjusting sample users quickly."
      }
    ]
  }
];

const loginView = document.getElementById("loginView");
const dashboardView = document.getElementById("dashboardView");
const loginForm = document.getElementById("loginForm");
const loginName = document.getElementById("loginName");
const loginPassword = document.getElementById("loginPassword");
const statusMessage = document.getElementById("statusMessage");
const logoutBtn = document.getElementById("logoutBtn");
const dashboardGreeting = document.getElementById("dashboardGreeting");
const dashboardSubtext = document.getElementById("dashboardSubtext");
const accountName = document.getElementById("accountName");
const accountRole = document.getElementById("accountRole");
const accountLogin = document.getElementById("accountLogin");
const profileAvatar = document.getElementById("profileAvatar");
const dashboardNav = document.getElementById("dashboardNav");
const contentTitle = document.getElementById("contentTitle");
const contentDescription = document.getElementById("contentDescription");
const contentTag = document.getElementById("contentTag");
const summaryGrid = document.getElementById("summaryGrid");
const actionLinksPanel = document.getElementById("actionLinksPanel");
const actionLinks = document.getElementById("actionLinks");
const tableTitle = document.getElementById("tableTitle");
const contentTable = document.getElementById("contentTable");
const listTitle = document.getElementById("listTitle");
const bulletList = document.getElementById("bulletList");
const insightBox = document.getElementById("insightBox");
const defaultContentGrid = document.getElementById("defaultContentGrid");
const customContentPanel = document.getElementById("customContentPanel");
const customContent = document.getElementById("customContent");

let expandedSectionId = "academic";
let activePageId = "assessment-marks";
let currentUser = null;

function setStatus(message, isSuccess) {
  statusMessage.textContent = message;
  statusMessage.classList.toggle("success", Boolean(isSuccess));
}

function clearErrors() {
  loginName.classList.remove("error");
  loginPassword.classList.remove("error");
}

function createTableMarkup(page) {
  const head = "<thead><tr>" + page.columns.map(function (column) {
    return "<th>" + column + "</th>";
  }).join("") + "</tr></thead>";

  const body = "<tbody>" + page.rows.map(function (row) {
    return "<tr>" + row.map(function (cell) {
      return "<td>" + cell + "</td>";
    }).join("") + "</tr>";
  }).join("") + "</tbody>";

  return head + body;
}


function getNavSections() {
  return currentUser && currentUser.isAdmin ? adminNavSections : navSections;
}

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");
}

function setCustomMode(enabled) {
  defaultContentGrid.classList.toggle("hidden", enabled);
  customContentPanel.classList.toggle("hidden", !enabled);
}

function createResultKeyFromLogin(login) {
  const cleaned = String(login || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return cleaned || "student-result";
}

function formatJsonField(value) {
  return JSON.stringify(value || [], null, 2);
}

function getAdminManagedUsers() {
  return users.map(function (user, index) {
    return { user: user, index: index };
  });
}

function buildAdminUserCard(entry) {
  const user = entry.user;
  const result = user.resultKey ? ensureResultEntry(user.resultKey) : null;
  const resultFields = user.isAdmin ? "" : `
    <div class="admin-field"><label>Result Key</label><input class="admin-input" data-field="resultKey" value="${escapeHtml(user.resultKey || "")}"></div>
    <div class="admin-field"><label>Result File</label><input class="admin-input" data-field="resultFile" value="${escapeHtml(user.resultFile || "")}"></div>
    <div class="admin-field"><label>SGPA</label><input class="admin-input" data-field="sgpa" value="${escapeHtml(result ? result.sgpa : "")}"></div>
    <div class="admin-field"><label>CGPA</label><input class="admin-input" data-field="cgpa" value="${escapeHtml(result ? result.cgpa : "")}"></div>
    <div class="admin-field"><label>Total Credits</label><input class="admin-input" data-field="totalCredits" value="${escapeHtml(result ? result.totalCredits : "")}"></div>
    <div class="admin-field"><label>Earned Credits</label><input class="admin-input" data-field="earnedCredits" value="${escapeHtml(result ? result.earnedCredits : "")}"></div>
    <div class="admin-field"><label>Best Grade</label><input class="admin-input" data-field="bestGrade" value="${escapeHtml(result ? result.bestGrade : "")}"></div>
    <div class="admin-field full"><label>Result Description</label><textarea class="admin-textarea" data-field="description">${escapeHtml(result ? result.description : "")}</textarea></div>
    <div class="admin-field full"><label>Result Insight</label><textarea class="admin-textarea" data-field="insight">${escapeHtml(result ? result.insight : "")}</textarea></div>
    <div class="admin-field full"><label>Result Rows JSON</label><textarea class="admin-textarea" data-field="rows">${escapeHtml(formatJsonField(result ? result.rows : []))}</textarea></div>
    <div class="admin-field full"><label>Result Bullets JSON</label><textarea class="admin-textarea" data-field="bullets">${escapeHtml(formatJsonField(result ? result.bullets : []))}</textarea></div>`;

  return `
    <article class="admin-user-card" data-user-index="${entry.index}">
      <div class="admin-user-header">
        <h4>${escapeHtml(user.name || "Unnamed User")}</h4>
        <span class="admin-user-badge">${user.isAdmin ? "Admin" : "Student"}</span>
      </div>
      <div class="admin-form-grid">
        <div class="admin-field"><label>Name</label><input class="admin-input" data-field="name" value="${escapeHtml(user.name || "")}"></div>
        <div class="admin-field"><label>Login</label><input class="admin-input" data-field="login" value="${escapeHtml(user.login || "")}"></div>
        <div class="admin-field"><label>Password</label><input class="admin-input" data-field="password" value="${escapeHtml(user.password || "")}"></div>
        <div class="admin-field"><label>Role</label><input class="admin-input" data-field="role" value="${escapeHtml(user.role || "")}"></div>
        <div class="admin-field"><label>Father Name</label><input class="admin-input" data-field="fatherName" value="${escapeHtml(user.fatherName || "")}"></div>
        <div class="admin-field"><label>Mother Name</label><input class="admin-input" data-field="motherName" value="${escapeHtml(user.motherName || "")}"></div>
        <div class="admin-field full"><label>Institute</label><input class="admin-input" data-field="institute" value="${escapeHtml(user.institute || "")}"></div>
        <div class="admin-field"><label>Semester</label><input class="admin-input" data-field="semester" value="${escapeHtml(user.semester || "")}"></div>
        <div class="admin-field"><label>Status</label><input class="admin-input" data-field="status" value="${escapeHtml(user.status || "")}"></div>
        ${resultFields}
      </div>
      <div class="admin-card-actions">
        <span class="admin-status">${user.isAdmin ? "Admin credentials can also be changed here." : "Save updates to refresh that user’s dashboard data in this browser."}</span>
        <button class="admin-save-btn" type="button" data-action="save-user">Save Changes</button>
      </div>
    </article>`;
}

function renderAdminUserManagement() {
  const managedUsers = getAdminManagedUsers();
  contentTitle.textContent = "User Management";
  contentDescription.textContent = "Edit logins, passwords, profile data, and exam result summaries for each site user.";
  contentTag.textContent = "Administration";
  summaryGrid.innerHTML = [
    { value: String(users.length), label: "Total Users" },
    { value: String(users.filter(function (user) { return !user.isAdmin; }).length), label: "Student Accounts" },
    { value: String(users.filter(function (user) { return user.isAdmin; }).length), label: "Admin Accounts" }
  ].map(function (stat) {
    return '<div class="summary-card"><strong>' + stat.value + '</strong><span>' + stat.label + '</span></div>';
  }).join("");
  actionLinksPanel.style.display = "none";
  actionLinks.innerHTML = "";
  setCustomMode(true);
  customContent.innerHTML = `
    <div class="admin-toolbar">
      <p class="admin-note">Changes save into local browser storage, so your edited data will still be there the next time you open this site in the same browser.</p>
      <button class="admin-create-btn" type="button" data-action="add-user">Add Student User</button>
    </div>
    <div class="admin-user-grid">
      ${managedUsers.map(buildAdminUserCard).join("")}
    </div>`;

  customContent.querySelector('[data-action="add-user"]').addEventListener("click", function () {
    const uniqueId = "student-" + Date.now();
    const newUser = {
      login: uniqueId.toUpperCase(),
      password: "CHANGE@123",
      name: "New Student",
      role: "Student",
      fatherName: "",
      motherName: "",
      institute: "Shri Vaishnav Institute of Information Technology (SVIIT)",
      semester: "1",
      status: "Regular",
      resultKey: uniqueId,
      resultFile: ""
    };

    users.push(newUser);
    ensureResultEntry(newUser.resultKey);
    saveUsers();
    saveStudentResults();
    renderAdminUserManagement();
  });

  customContent.querySelectorAll('[data-action="save-user"]').forEach(function (button) {
    button.addEventListener("click", function () {
      const card = button.closest("[data-user-index]");
      const index = Number(card.getAttribute("data-user-index"));
      const existingUser = users[index];

      if (!existingUser) {
        return;
      }

      const updatedUser = Object.assign({}, existingUser);
      card.querySelectorAll("[data-field]").forEach(function (field) {
        updatedUser[field.getAttribute("data-field")] = field.value.trim();
      });

      updatedUser.login = updatedUser.login.toUpperCase();

      if (updatedUser.isAdmin) {
        updatedUser.role = updatedUser.role || "Administrator";
      } else {
        updatedUser.role = updatedUser.role || "Student";
        updatedUser.resultKey = updatedUser.resultKey || createResultKeyFromLogin(updatedUser.login);
        const result = ensureResultEntry(updatedUser.resultKey);

        try {
          result.sgpa = updatedUser.sgpa || result.sgpa;
          result.cgpa = updatedUser.cgpa || result.cgpa;
          result.totalCredits = updatedUser.totalCredits || result.totalCredits;
          result.earnedCredits = updatedUser.earnedCredits || result.earnedCredits;
          result.bestGrade = updatedUser.bestGrade || result.bestGrade;
          result.description = updatedUser.description || result.description;
          result.insight = updatedUser.insight || result.insight;
          result.rows = JSON.parse(updatedUser.rows || "[]");
          result.bullets = JSON.parse(updatedUser.bullets || "[]");
        } catch (error) {
          window.alert("Rows JSON or Bullets JSON is invalid. Please keep valid JSON arrays.");
          return;
        }

        delete updatedUser.sgpa;
        delete updatedUser.cgpa;
        delete updatedUser.totalCredits;
        delete updatedUser.earnedCredits;
        delete updatedUser.bestGrade;
        delete updatedUser.description;
        delete updatedUser.insight;
        delete updatedUser.rows;
        delete updatedUser.bullets;
      }

      users[index] = updatedUser;
      if (currentUser && currentUser.login === existingUser.login) {
        currentUser = updatedUser;
      }
      saveUsers();
      saveStudentResults();
      renderAdminUserManagement();
    });
  });
}

function buildStudentResultPage(user) {
  if (!user || !user.resultKey || !studentResults[user.resultKey]) {
    return null;
  }

  const result = studentResults[user.resultKey];

  return {
    id: "exam-result",
    label: "Exam Result",
    tag: "Academic",
    description: result.description,
    stats: [
      { value: result.sgpa, label: "Semester 1 SGPA" },
      { value: result.cgpa, label: "Current CGPA" },
      { value: result.totalCredits, label: "Total Credits" },
      { value: result.earnedCredits, label: "Earned Credits" },
      { value: result.bestGrade, label: "Best Grade" }
    ],
    tableTitle: "Result Sheet",
    columns: ["Course Code", "Course", "Credits", "Earned", "Total Grade"],
    rows: result.rows,
    listTitle: "Result Insights",
    bullets: result.bullets,
    insight: result.insight,
    actions: [
      {
        label: "Sem 1 Result",
        description: "Open the detailed semester 1 statement of marks for " + user.name + ".",
        href: user.resultFile,
        cta: "View marksheet"
      }
    ]
  };
}

function buildStudentAcademicPage(pageId, fallbackPage) {
  if (!currentUser || !currentUser.resultKey || !studentDashboards[currentUser.resultKey]) {
    return fallbackPage;
  }

  const userDashboard = studentDashboards[currentUser.resultKey][pageId];

  if (!userDashboard) {
    return fallbackPage;
  }

  return {
    id: fallbackPage.id,
    label: fallbackPage.label,
    tag: fallbackPage.tag,
    tableTitle: fallbackPage.tableTitle,
    columns: fallbackPage.columns,
    listTitle: fallbackPage.listTitle,
    description: userDashboard.description,
    stats: userDashboard.stats,
    rows: userDashboard.rows,
    bullets: userDashboard.bullets,
    insight: userDashboard.insight
  };
}

function findPageDefinition(pageId) {
  for (const section of getNavSections()) {
    for (const page of section.items) {
      if (page.id === pageId) {
        const resolvedPage = pageId === "exam-result" ? buildStudentResultPage(currentUser) || page : buildStudentAcademicPage(pageId, page);
        return { sectionId: section.id, page: resolvedPage };
      }
    }
  }

  return null;
}

function renderPage(pageId) {
  const match = findPageDefinition(pageId);

  if (!match) {
    return;
  }

  if (currentUser && currentUser.isAdmin && pageId === "user-management") {
    activePageId = pageId;
    expandedSectionId = match.sectionId;
    renderAdminUserManagement();
    renderNavigation();
    return;
  }

  const page = match.page;
  activePageId = pageId;
  expandedSectionId = match.sectionId;
  setCustomMode(false);
  contentTitle.textContent = page.label;
  contentDescription.textContent = page.description;
  contentTag.textContent = page.tag;
  tableTitle.textContent = page.tableTitle;
  listTitle.textContent = page.listTitle;
  insightBox.textContent = page.insight;

  summaryGrid.innerHTML = page.stats.map(function (stat) {
    return '<div class="summary-card"><strong>' + stat.value + '</strong><span>' + stat.label + '</span></div>';
  }).join("");

  if (page.actions && page.actions.length) {
    actionLinksPanel.style.display = "block";
    actionLinks.innerHTML = page.actions.map(function (action) {
      return '<a class="action-link" href="' + action.href + '"><strong>' + action.label + '</strong><span>' + action.description + '</span><em>' + action.cta + ' -></em></a>';
    }).join("");
  } else {
    actionLinksPanel.style.display = "none";
    actionLinks.innerHTML = "";
  }

  contentTable.innerHTML = createTableMarkup(page);

  bulletList.innerHTML = page.bullets.map(function (bullet) {
    return '<div class="bullet-item"><span>' + bullet[0] + '</span><small>' + bullet[1] + '</small></div>';
  }).join("");

  renderNavigation();
}

function renderNavigation() {

  dashboardNav.innerHTML = getNavSections().map(function (section) {
    const expanded = section.id === expandedSectionId;
    const sectionStyle = "--section-color: " + section.color;
    const links = section.items.map(function (item) {
      const activeClass = item.id === activePageId ? " active" : "";
      return "<button class=\"subnav-link" + activeClass + "\" type=\"button\" data-page=\"" + item.id + "\" style=\"" + sectionStyle + "\">" + item.label + "</button>";
    }).join("");

    return (
      "<div class=\"nav-item" + (expanded ? " expanded" : "") + "\" style=\"" + sectionStyle + "\">" +
        "<button class=\"nav-trigger\" type=\"button\" data-section=\"" + section.id + "\">" +
          "<span class=\"left\"><span class=\"icon\">" + section.icon + "</span><span class=\"nav-label\">" + section.label + "</span></span>" +
          "<span class=\"caret\">⌄</span>" +
        "</button>" +
        "<div class=\"subnav\">" + links + "</div>" +
      "</div>"
    );
  }).join("");

  dashboardNav.querySelectorAll(".nav-trigger").forEach(function (button) {
    button.addEventListener("click", function () {
      const sectionId = button.getAttribute("data-section");
      expandedSectionId = expandedSectionId === sectionId ? "" : sectionId;
      renderNavigation();
    });
  });

  dashboardNav.querySelectorAll(".subnav-link").forEach(function (button) {
    button.addEventListener("click", function () {
      renderPage(button.getAttribute("data-page"));
    });
  });
}

function showDashboard(user) {
  currentUser = user;
  activePageId = user.isAdmin ? "user-management" : "assessment-marks";
  expandedSectionId = user.isAdmin ? "admin-tools" : "academic";

  const initials = user.name
    .split(" ")
    .map(function (part) {
      return part[0];
    })
    .join("")
    .slice(0, 2)
    .toUpperCase();

  dashboardGreeting.textContent = user.name.toUpperCase();
  dashboardSubtext.textContent = user.isAdmin ? "Logged in as Administrator | Manage users and result data" : "Logged in as " + user.role + " | Sample ERP preview";
  accountName.textContent = user.name;
  accountRole.textContent = user.role;
  accountLogin.textContent = user.login.toUpperCase();
  profileAvatar.textContent = initials;
  renderPage(activePageId);
  loginView.classList.add("hidden");
  dashboardView.classList.remove("hidden");
}

function showLogin() {
  currentUser = null;
  setCustomMode(false);
  loginView.classList.remove("hidden");
  dashboardView.classList.add("hidden");
  loginForm.reset();
  clearErrors();
  setStatus("", false);
  loginName.focus();
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  clearErrors();

  const login = loginName.value.trim().toUpperCase();
  const password = loginPassword.value.trim();

  if (!login || !password) {
    if (!login) loginName.classList.add("error");
    if (!password) loginPassword.classList.add("error");
    setStatus("Enter both login name and password.", false);
    return;
  }

  const matchedUser = users.find(function (user) {
    return user.login.toUpperCase() === login && user.password === password;
  });

  if (!matchedUser) {
    loginName.classList.add("error");
    loginPassword.classList.add("error");
    setStatus("Invalid login name or password.", false);
    return;
  }

  setStatus("Login successful.", true);
  showDashboard(matchedUser);
});

logoutBtn.addEventListener("click", showLogin);
