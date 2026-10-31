// All site content lives here.
// Source: "Salman Aljazzaf CV (October 2026)", plus the Kuwait University CBA faculty page for office details.

export const profile = {
  name: 'Dr. Salman Aljazzaf',
  shortName: 'Salman Aljazzaf',
  title: 'Assistant Professor of Information Systems',
  department: 'Department of Information Systems and Operations Management',
  college: 'College of Business Administration',
  university: 'Kuwait University',
  location: 'Kuwait City, Kuwait',
  email: 'salman.aljazzaf@ku.edu.kw',
  office: 'B-2-1022 (CBA South)',
  summary:
    'Assistant Professor of Information Systems at Kuwait University, researching how organizations create business value from information technology — with interests in IT governance, digital platforms, e-government, and digital transformation.',
  bio: 'His teaching and research methods training include qualitative comparative analysis (QCA). His academic leadership includes serving as Head of the Consulting and Training Office at the College of Business Administration, and as a founding executive committee member and Secretary of the AIS GCC Chapter. He holds a Ph.D. in Information Systems and an MBA from the Robert H. Smith School of Business, University of Maryland, and a B.Sc. in Computer Engineering from Kuwait University — and before academia spent six years as a network and telecommunications engineer at the Kuwait National Petroleum Company.',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aljazzaf/' },
    { label: 'Kuwait University profile', href: 'https://cba.ku.edu.kw/user/6413' },
    { label: 'Email', href: 'mailto:salman.aljazzaf@ku.edu.kw' },
  ],
};

// Words cycled in the hero tagline
export const focusAreas = [
  'Business value of IT',
  'IT governance',
  'Digital platforms',
  'E-government',
  'Digital transformation',
];

const yearsSince = (year: number) => new Date().getFullYear() - year;

export const stats = [
  { value: yearsSince(2019), suffix: '+', label: 'Years at Kuwait University' },
  { value: 3, suffix: '', label: 'Peer-reviewed journal articles' },
  { value: 11, suffix: '', label: 'Peer-reviewed conference papers' },
  { value: 20, suffix: '+', label: 'Papers reviewed for IS journals & conferences' },
];

export const researchInterests = [
  {
    title: 'Business Value of IT',
    text: 'How organizations create business value from information technology investments and capabilities.',
  },
  {
    title: 'IT Governance',
    text: 'How IT management, reporting structures, and IT-business alignment shape organizational performance.',
  },
  {
    title: 'Digital Platforms',
    text: 'Pricing, promotions, and customer loyalty in online two-sided and multi-sided platforms.',
  },
  {
    title: 'E-Government',
    text: 'E-government service quality, citizen satisfaction, and trust in government.',
  },
  {
    title: 'Digital Transformation',
    text: 'The capabilities that lead to transformational results, including in healthcare organizations.',
  },
  {
    title: 'Digital Marketing',
    text: 'Price discounts, promotions, and buyer behavior on digital platforms.',
  },
];

export const skills = [
  {
    group: 'Research methods & analytics',
    items: ['fsQCA', 'R', 'UCINET', 'Mplus', 'XLMiner', 'StatTools', 'PrecisionTree'],
  },
  {
    group: 'Programming & web',
    items: ['C/C++', 'Java', 'JDBC', 'Servlets', 'JSP', 'HTML', 'JavaScript', 'CSS', 'PHP'],
  },
];

export const experience = [
  {
    org: 'Kuwait University',
    unit: 'College of Business Administration',
    roles: [
      {
        title: 'Head of Consulting and Training Office',
        period: 'Apr 2026 — Present',
        points: [
          'Manages office operations and coordinates the Training, Consultation, and Accounting Units to deliver training programs, consulting projects, and professional examination and assessment services.',
          'Oversees proposal review, agreement preparation and negotiation, and operational coordination with faculty, clients, and college leadership.',
          'Reviews service delivery and training evaluation results, and oversees compliance with administrative and financial procedures.',
        ],
      },
      {
        title: 'Head of Training Unit',
        period: 'Mar 2024 — Apr 2026',
        points: [
          'Oversaw training portfolio development and the planning, design, and delivery of professional development programs for public- and private-sector clients.',
          'Coordinated client requirements, proposals, instructors, schedules, and logistics, and used participant feedback to improve programs.',
        ],
      },
      { title: 'Assistant Professor of Information Systems', period: 'Aug 2019 — Present' },
    ],
  },
  {
    org: 'University of Maryland, College Park',
    unit: 'Robert H. Smith School of Business',
    roles: [
      { title: 'Research Assistant', period: 'Aug 2014 — May 2019' },
      { title: 'Teaching Assistant', period: 'Mar — May 2014' },
    ],
  },
  {
    org: 'Kuwait National Petroleum Company',
    unit: 'KNPC',
    roles: [
      {
        title: 'Network Engineer',
        period: 'Apr 2009 — Jul 2012',
        points: [
          'Managed network and security systems, coordinated network projects, and contributed to project and IT budget planning.',
        ],
      },
      {
        title: 'Telecommunications Engineer',
        period: 'Sep 2006 — Mar 2009',
        points: [
          'Managed VoIP, unified communications, and fiber transmission systems; supervised telecommunications projects; and contributed to database management and website development.',
        ],
      },
    ],
  },
];

export const education = [
  {
    degree: 'Ph.D. in Information Systems',
    institution: 'Robert H. Smith School of Business, University of Maryland, College Park',
    year: '2019',
    note: 'Dissertation: “A Configurational Approach to Examining the Influence of Information Technology Management and Governance on Organization Performance.” Chair: Sunil Mithas.',
  },
  {
    degree: 'Master of Business Administration',
    institution: 'Robert H. Smith School of Business, University of Maryland, College Park',
    year: '2014',
  },
  {
    degree: 'B.Sc. in Computer Engineering',
    institution: 'Kuwait University',
    year: '2006',
  },
];

export const certifications = [
  {
    name: 'Cisco Certified Network Associate',
    short: 'CCNA',
    issuer: 'Cisco',
    year: '2009',
  },
  {
    name: 'Microsoft Certified Technology Specialist',
    short: 'MCTS',
    issuer: 'Microsoft',
    year: '2008',
  },
];

export const honors = [
  {
    title: 'Kuwait University Postgraduate Sponsorship',
    detail: 'Full sponsorship for MBA and Ph.D. studies',
    period: '2012–2019',
  },
  {
    title: 'Robert H. Smith Award',
    detail: 'Outstanding academic achievement throughout the MBA program',
    period: '2012–2014',
  },
  {
    title: 'Emir of Kuwait Honor List',
    detail: 'Kuwait University graduates',
    period: '2006',
  },
];

const scholar = (title: string) =>
  `https://scholar.google.com/scholar?q=${encodeURIComponent(`"${title}"`)}`;

export const journalArticles = [
  {
    title:
      'Linking Operational Transparency and Trust in Government: The Mediating Roles of Information Quality and Perceived Effort',
    authors: 'Ashkanani, A. M., Aljazzaf, S., & Alsarraf, H. A.',
    venue: 'The Arab Journal of Administrative Sciences, 31(1), 137–175',
    year: '2024',
  },
  {
    title:
      'Do you see my effort? An investigation of the relationship between e-government service quality and trust in government',
    authors: 'Alsarraf, H. A., Aljazzaf, S., & Ashkanani, A. M.',
    venue: 'Transforming Government: People, Process and Policy, 17(1), 116–133',
    year: '2022',
  },
  {
    title:
      'An empirical and comparative analysis of E-government performance measurement models: Model selection via explanation, prediction, and parsimony',
    authors: 'Sharma, P. N., Morgeson III, F. V., Mithas, S., & Aljazzaf, S.',
    venue: 'Government Information Quarterly, 35(4), 515–535',
    year: '2018',
  },
].map((pub) => ({ ...pub, href: scholar(pub.title) }));

export const manuscripts = [
  {
    title:
      'How Information Technology Reporting Structure and IT-Business Alignment Influence Firm Performance: New Insights from a Configurational Perspective',
    authors: 'Aljazzaf, S., Mithas, S., Park, Y. K., & Saldanha, T.',
    venue: 'Journal of Strategic Information Systems',
    status: 'Conditionally accepted',
    year: '2026',
  },
  {
    title:
      'Digital Strategic Alignment and Discretionary Expenditures: Novel Insights from a Configurational Approach',
    authors: 'Mithas, S., Park, Y. K., Saldanha, T., & Aljazzaf, S.',
    status: 'Under review',
    year: '2026',
  },
  {
    title: 'What Does it Take to Achieve Transformational Results in Healthcare Organizations?',
    authors: 'Aljazzaf, S., Mithas, S., Park, Y. K., & Saldanha, T.',
    status: 'Under review',
    year: '2026',
  },
];

export const conferencePapers = [
  {
    title:
      'Do Promotions Activate or Cannibalize Loyal Customers? Evidence from a Food-Delivery Platform',
    authors: 'Aljazzaf, S., & Ashkanani, A. M.',
    venue: '9th International Symposium on Computational and Business Intelligence, Macau, China',
    status: 'Accepted',
    year: '2027',
  },
  {
    title:
      'Perceived Quality, Expectations, and Citizen Satisfaction with E-Government Services: A Configurational Perspective',
    authors: 'Aljazzaf, S.',
    venue: '2nd Saudi Conference on Information Systems, Dhahran, Saudi Arabia',
    status: 'Accepted',
    year: '2027',
  },
  {
    title:
      'What Shapes Attitudes Toward Artificial Intelligence: Insights from the National Technology Readiness Survey',
    authors: 'Aljazzaf, S., Mithas, S., & Colby, C. L.',
    venue: '1st Saudi Conference on Information Systems, Dhahran, Saudi Arabia',
    year: '2024',
  },
  {
    title:
      'Price Discounts in Online Two-Sided Markets: The Impact of Customer Loyalty and Buyer Switching',
    authors: 'Aljazzaf, S., & Ashkanani, A. M.',
    venue: '16th Mediterranean Conference on Information Systems, Porto, Portugal',
    year: '2024',
  },
  {
    title: 'What Does it Take to Achieve Transformational Results in Healthcare Organizations?',
    authors: 'Aljazzaf, S., Quick, J., & Mithas, S.',
    venue: '84th Annual Meeting of the Academy of Management, Chicago, IL',
    year: '2024',
  },
  {
    title:
      'Which Capabilities Matter Most for Achieving Transformational Results in Healthcare? Evidence from the United States',
    authors: 'Aljazzaf, S., & Mithas, S.',
    venue: 'Conference on Health IT and Analytics, Washington, DC',
    year: '2022',
  },
  {
    title:
      'The Information Technology Reporting Structure and Firm Performance: A Configurational Approach',
    authors: 'Aljazzaf, S., Mithas, S., & Park, Y. K.',
    venue: '25th Americas Conference on Information Systems, Cancun, Mexico',
    year: '2019',
  },
  {
    title:
      'What Shapes Attitudes Toward Artificial Intelligence: Insights from the National Technology Readiness Survey 2018',
    authors: 'Aljazzaf, S., Mithas, S., Colby, C. L., & Parasuraman, A.',
    venue: '28th Frontiers in Service Conference, Singapore',
    year: '2019',
  },
  {
    title: 'The Complementarity between IT Management and HR Management',
    authors: 'Aljazzaf, S., Mithas, S., & Tafti, A.',
    venue: '24th Americas Conference on Information Systems, New Orleans, LA',
    year: '2018',
  },
  {
    title:
      'In Which Model Do We Trust? Comparing the Explanatory and Predictive Abilities of Models of E-Government Satisfaction and Trust',
    authors: 'Sharma, P. N., Morgeson, F., Mithas, S., & Aljazzaf, S.',
    venue: '21st Americas Conference on Information Systems, Puerto Rico',
    year: '2015',
  },
  {
    title:
      'In Which Model Do We Trust? Comparing the Explanatory and Predictive Abilities of Models of E-Government Satisfaction and Trust',
    authors: 'Sharma, P. N., Morgeson, F., Mithas, S., & Aljazzaf, S.',
    venue: '24th Frontiers in Service Conference, San Jose, CA',
    year: '2015',
  },
];

export const courses = [
  'Introduction to Electronic Commerce',
  'Business Information and Technology',
  'Data Communications & Networks',
  'Web Application Development',
  'Enterprise Architecture, Systems and Technologies',
  'Human Computer Interaction',
];

export const courseDevelopment =
  'Contributed to course development and curriculum enhancement through the design and revision of course content, structure, and delivery approaches for Business Information and Technology; Enterprise Architecture, Systems and Technologies; Human Computer Interaction; and Web Application Development.';

export const otherTeaching = [
  {
    label: 'Invited doctoral teaching',
    title: 'Guest Lecturer, Muma College of Business, University of South Florida',
    date: '6 & 13 April 2026',
    text: 'Two virtual sessions (six teaching hours) on Configurational View and Qualitative Comparative Analysis for the Ph.D. course Computational Methods in Information Systems Research.',
  },
  {
    label: 'Teaching assistant',
    title: 'Robert H. Smith School of Business, University of Maryland',
    date: '2014',
    text: 'Healthcare Information Systems (graduate level) and Healthcare Information Technology (undergraduate level).',
  },
];

export const talks = [
  {
    title: 'Price Discounts in Online Multi-sided Platforms',
    type: 'Research brownbag',
    where: 'College of Business Administration, Kuwait University',
    date: '23 April 2025',
  },
  {
    title:
      'Price Discounts in Online Two-Sided Platforms: The Impact of Customer Loyalty & Buyer Switching',
    type: 'Lightning talk',
    where: 'College of Business Administration, Kuwait University',
    date: '17 April 2025',
  },
  {
    title: 'Information from an Integrated Perspective: Information Systems',
    type: 'Invited speaker',
    where:
      'First Scientific Forum on Information from an Integrated Perspective, College of Social Sciences, Kuwait University',
    date: '14–15 November 2022',
  },
  {
    title: 'Qualitative Comparative Analysis',
    type: 'Virtual research seminar',
    where: 'College of Business Administration, Kuwait University',
    date: '21 April 2021',
  },
];

export const workshops = [
  {
    title: 'Introduction to Qualitative Comparative Analysis (QCA)',
    where:
      '1st Saudi Conference on Information Systems, King Fahd University of Petroleum and Minerals, Dhahran, Saudi Arabia',
    date: 'November 2024',
  },
  {
    title: 'Introduction to Qualitative Comparative Analysis (QCA)',
    where: 'College of Business Administration, Kuwait University',
    date: 'March 2024',
    note: 'Two-day workshop',
  },
  {
    title: 'Programmatic Research and Complex Causality with a Focus on QCA',
    where: 'Management Development Institute, Gurgaon, India',
    date: 'February 2024',
    note: 'Four-day virtual workshop co-led with Sunil Mithas',
  },
];

export const leadershipService = [
  {
    role: 'Founding Executive Committee Member & Secretary',
    org: 'Association for Information Systems (AIS) GCC Chapter',
    date: '2026 — Present',
  },
  {
    role: 'Track Chair',
    org: '2nd Saudi Conference on Information Systems — Track 7: IS in the GCC Region: Challenges and Opportunities',
    date: '2026',
  },
  {
    role: 'Organizing Committee Member',
    org: 'GCC Information Systems Symposium, Carnegie Mellon University in Qatar',
    date: 'November 2025',
  },
];

export const universityService = [
  { role: 'Strategic Planning Committee', date: '2023–2024' },
  { role: 'Communication Strategy Taskforce', date: '2022–2023' },
  { role: 'Curriculum Restructuring Taskforce', date: '2021–2022' },
  { role: 'Online Education Committee', date: '2020–2022' },
];

export const reviewing = {
  journals: [
    'Information Systems Research',
    'MIS Quarterly',
    'Information Technology & People',
    'Information Systems Frontiers',
    'IEEE IT Professional',
    'Arab Journal of Administrative Sciences',
  ],
  conferences: [
    'International Conference on Information Systems (ICIS)',
    'European Conference on Information Systems (ECIS)',
    'Americas Conference on Information Systems (AMCIS)',
    'Conference on Information Systems and Technology (CIST)',
    'MCIS & MENACIS',
    'Saudi Conference on Information Systems',
  ],
};

export const community = [
  {
    role: 'Guest Lecturer',
    org: 'CODED Academy X',
    text: 'Lectures on business models.',
    date: 'Jul & Sep 2025',
  },
  {
    role: 'Panelist',
    org: 'CODED Youth coding summer program',
    text: 'Discussion of academic and professional experiences with Kuwait University faculty.',
    date: 'Jul 2025',
  },
  {
    role: 'Judge',
    org: 'Generation Science, Kuwait Foundation for the Advancement of Sciences (KFAS)',
    text: 'Evaluated projects from 102 high school students from Kuwait, the UAE, and Qatar.',
    date: 'Aug 2024',
  },
  {
    role: 'College Representative',
    org: 'Choosing the Appropriate University Major forum, Smart Mind Educational Group',
    text: 'Guidance for 12th-grade students.',
    date: 'May 2024',
  },
  {
    role: 'Invited Speaker',
    org: 'CBA new student orientations',
    text: 'Organized by the Kuwait University Student Union and the Student Association of CBA.',
    date: '2021–2026',
  },
];

// YouTube's standard thumbnail for a watch URL (hqdefault always exists)
const youtubeThumb = (href?: string) => {
  const id = href && new URL(href).searchParams.get('v');
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : undefined;
};

export const media = [
  {
    outlet: 'Tharwa Podcast',
    show: 'Interview',
    topic: 'The growth of digital businesses',
    date: '23 June 2022',
    href: 'https://www.youtube.com/watch?v=Byu0WB51dV8',
  },
  {
    outlet: 'Kuwait Radio, Channel 2',
    show: 'Shabab-dot-com',
    topic: 'The digital economy',
    date: '21 August 2021',
  },
  {
    outlet: 'Kuwait TV, Channel 1',
    show: 'The World This Morning',
    topic: 'The digital economy',
    date: '18 August 2021',
    href: 'https://www.youtube.com/watch?v=9HC0UzOTJF4',
  },
].map((item) => ({ ...item, thumb: youtubeThumb(item.href) }));

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Service', href: '#service' },
  { label: 'Media', href: '#media' },
  { label: 'Contact', href: '#contact' },
];
