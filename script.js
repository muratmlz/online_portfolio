function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[lang][key];
    });
}


window.addEventListener("scroll",scrollFunction);

function scrollFunction() {
    var btn = 
    document.getElementById("scrollToTopBtn");
    if (window.pageYOffset > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
    




const translations = {
    en: {
        home: 'Home',
        about: 'About Me',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact',
        welcome: 'Welcome to My Portfolio!',
        intro1: 'Who I Am', 
        WhoIAm: 'I am Miliazim Murat, a student at SAEK DELTA 360 specializing in Computer Applications Technology. With a passion for technology and innovation, i continuously develop my skills in the field of information technology, focusing on creating efficient and cutting-edge solutions.',
        intro2: 'My Goal',
        MyGoal: 'My goal is to combine theoretical knowledge with practical experience to create innovative and efficient applications. I am dedicated to continuous improvement and seeking new opportunities to grow professionally.',
        intro3: 'Values and Vison',
        ValuesAndVision: 'I believe in the power of technology to change the world for the better. My core values include: ',
        Collaboration: '- Collaboration: Teamwork leads to better results.',
        Innovation: '- Innovation: Continuously seeking new and improved ways to solve problems.',
        Dedication: '- Dedication: Commitment to quality and achieving goals.',
        Vision: 'My vision is to become an accomplished professional in the field of information technology, contributing my knowledge and skills to creating technological solutions that improve peoples daily lives.',
        aboutMe1: ' I am a student at SAEK DELTA 360, specializing in the field of Information Technology, particularly as an IT Applications Tecnician. Technology has always fascinated me, which is why i chose to pursue a career in IT and programming. During my studies, i have gained knowledge in various programming languages such as HTML, CSS and JavaScript, which allow me to create functional and aesthetically pleasing websites.',
        aboutMe2: ' Additionally, i have learned to work with technologies like Python and SQL, which enable me to develop more complex applications and manage databases. My education is not limited to coding; it also includes understanding how to design and implement comprehensive solutions that meet user needs.',
        aboutMe3: ' What sets me apart is my ability to learn quicly and adapt to new challenges. Through the projects and assignments i have completed as part of my studies, i have developed skills in teamwork, time management, and problem-solving. These experiences have taught me the importance of carefully analyzing project requirements and systematically approaching their implementation.',
        aboutMe4: ' My goal is to continue growing in the IT field and to apply my knowledge and skills to real-world projects that make a difference. I firmly belive that technology can change the world for the better, and i am committed to contributing to this change in any way i can.',
        aboutMe5: ' In my free time, i enjoy exploring new technologies and learning about the latest developments in the IT field. I am always striving to improve my knowledge and stay update on the latest trends and innovations in our industry. I am excited to see where my passion for IT will take me in the future and to develop even more skills that will help me achieve my professional goals.',

        projectsIntro: 'Showcasing important projects and assignments completed during my studies.',
        project1: 'Personal Project',
        project11: 'Age Calculator',
        project12: 'Description: An application that calculates a user΄s age based on their birthdate.',
        project13: 'Technologies: HTML, CSS, JavaScript',
        project14: 'Features: Date input, age calculation, and display in years.',
        project2: 'Personal Project',
        project21: 'To Do List',
        project22: 'Description: An interactive application that allows users to add, remove, and manage their daily tasks.',
        project23: 'Technologies: HTML, CSS, JavaScript',
        project24: 'Features: Add and delete list items, mark tasks as completed.',
        project25: 'Link: View the project',
        project3: 'School Project',
        project31: 'Calculator in C++',
        project32: 'Description: A simple calculator written in C++, supporting basic arithmetic operations such as addition, subtraction, multiplication, and division.',
        project33: 'Technologies: C++',
        project34: 'Features: Command-line interface, basic arithmetic operations, input validation.',
        project35: 'Note: The project is not yet available for public access. Please contact me for more informations.',
        project4: 'School Project',
        project41: 'Apple presentation website',
        project42: 'Description: Website dedicated to the presentation of the Apple company, with information about its history, its products and its logo.',
        project43: 'Technologies: HTML, CSS',
        project44: 'Features: Structured navigation with menu, logo image, presentation of historical data and products, clean design with an emphasis on readability.',
        prohect45: 'Note: The project is not yet available for public access. Contact me for more information.',
        project5: 'School Project',
        project51: '3D Geometric Shapes with OpenGL',
        project52: 'Description: C++ application using the OpenGL/GLUT library to display basic 3D shapes such as spheres, cones and tori, with the ability to display in filled or wireframe format.',
        project53: 'Technologies: C++, OpenGL, GLUT, Code::Blocks IDE',
        project54: 'Features: Rendering 3D shapes with colors and materials, use of GLUT for windowed display, support for filled and wireframe formats.',
        project55: 'Note: The program runs in the Code::Blocks environment and uses the GNU GCC Compiler. It requires the installation of OpenGL libraries.',
        project6: 'School Project',
        project61: '3D Christmas Tree Model',
        project62: 'Description: Christmas tree model created in Autodesk 3ds Max 2024 (educational edition). The tree includes green layers that simulate the branches, a brown trunk, and a yellow star on top, shown in perspective view.',
        project63: 'Technologies: Autodesk 3ds Max 2024, 3D modeling, rendering, animation',
        project64: 'Features: Use of different layers to visualize the tree structure, integration of colors and materials, support for perspective viewing and surface editing.',
        project65: 'Note: The project is not yet available for public access. Contact me for more information.',
        project7: 'School Project',
        project71: 'Android Studio - UI Design',
        project72: 'Description: Android application development using Android Studio, with emphasis on UI design and component structure. The project includes the visualization and editing of the application interface.',
        project73: 'Technologies: Android Studio, Java, XML, Material Design',
        project74: 'Features: UI element configuration, design preview, ability to edit and customize views, support for different layouts and responsive design.',
        project75: 'Note: The project is not yet available for public access. Contact me for more information.',
        project8: 'School Project',
        project81: 'User Interface Design in Figma',
        project82: 'Description: User interface (UI) design and prototyping using Figma. The project focuses on creating responsive layouts, managing stylistic choices, and interacting with application design.',
        project83: 'Technologies: Figma, UI/UX Design, Prototyping, Vector Graphics',
        project84: 'Features: Create customizable UI elements, use Auto Layouts, apply vector graphics and stylistic effects, support interaction through prototypes.',
        project85: 'Note: The design was created in Figma with the ability to be shared and exported to different formats for application development.',
        project9: 'Web Development Team Project',
        project91: 'Creating a Dynamic Website',
        project92: 'Description: Teamwork to develop a dynamic website using HTML, CSS, JavaScript, PHP and SQL. The goal is to create a complete system, which allows user interaction and data storage in a database.',
        project93: 'Technologies: HTML, CSS, JavaScript, PHP, MySQL, Responsive Web Design',
        project94: 'Features: Dynamic navigation and content management, responsive design for improved user experience, database connection for data storage and processing, JavaScript implementation for interactivity.',
        project95: 'Note: The project was developed by two team members and uses web development technologies to create a functional and modern website.',
        project10: 'School Project',
        project101: 'Website Building with WordPress',
        project102: 'Description: Development of a dynamic website using WordPress, with an emphasis on structure, responsive design and content optimization. The project includes theme creation, plugin addition and data management.',
        project103: 'Technologies: WordPress, CMS, Plugins, SEO Optimization',
        project104: 'Features: Use of custom themes (OceanWP), SEO optimization, content management via CMS, adding dynamic functions with plugins.',
        project105: 'Note: The website was developed based on WordPress for easy management and scalability.',

        Experience1: '- Preparing for the World of IT   "As a student at SAEK DELTA, specializing in IT Applications, i am on an exciting journey of education and preparation for a career in the field of information technology. Every day, i develop my skills through courses, assignments, and practical applications.' , 
        Experience1v1: 'Throughout my education, i have delved into key areas of IT such as programming, web development, and database management. I work on project that simulate real-world work environments, giving me the opportunity to better understand the industry΄s demands."',
        Experience2: '- Developing Professional Skills Through Education   "Through various project and group work, i have learned to collaborate effectively with fellow students, exchange ideas, and find solutions to technical problems. This experience has helped me develop important skills such as communicaton, organization, and problem-solving."',
        Experience3: '- Looking Towards the Future   "Although i am still in the learning phase, continuous learning and practice make me feel prepared for the next steps. I look forward to applying my knowledge to real-world projects and gaining practical experience as i continue to grow in the IT field. I see myself contributing significantly to a dynamic work environment where i can leverage my knowledge and skills to create innovative solutions."',
        Experience4: '- For My Resume   "If you are interested in learning more about my skills or would like to receive my resume, please contact me through the contact section. I prefer to keep my resume private and available only to those who express interest."',  

        contactIntro: 'For any inquiries or rewuests related to my resume, please use the contact form below. Fill out the required fields and describe your request clearly so i can respond accurately. I will strive to get back to you as soon as possible. Thank you for your interest, and i look forward to assisting you.',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
        contactInfo: 'Contact Information'
    },
    el: {
        home: 'Αρχική',
        about: 'Σχετικά με Εμένα',
        projects: 'Εργασίες',
        experience: 'Εμπειρία',
        contact: 'Επικοινωνία',
        welcome: 'Καλωσορίσατε στο Portfolio μου!',
        intro1: 'Ποιός Είμαι',
        WhoIAm: 'Έιμαι ο Μηλιαζήμ Μουράτ, σπουδαστής στο ΣΑΕΚ ΔΕΛΤΑ 360 με ειδικότητα Τεχνικός Εφαρμογών Πληροφορικής. Με πάθος για την τεχνολογία και την καινοτομία, αναπτύσσω συνεχώς τις δεξιότητες μου στον τομέα της πληροφορικής, εστιάζοντας στη δημιουργία αποτελεσματικών και πρωτοποριακών λύσεων.',
        intro2: 'Ο Στόχος μου',
        MyGoal: 'Στόχος μου είναι να συνδυάσω τη θεωρητική γνώση με την πρακτική εμπειρία, ώστε να δημιουργώ καινοτόμες και αποδοτικές εφαρμογές. Είμαι αφοσιωμένος στη συνεχή βελτίωση και στην αναζήτηση νέων ευκαιριών για να εξελιχθώ επαγγελματικά.',
        intro3: 'Αξίες και Όραμα',
        ValuesAndVision: 'Πιστεύω στη δύναμη της τεχνολογίας να αλλάξει τον κόσμο προς το καλύτερο. Οι βασικές μου αξίες περιλαμβάνουν: ',
        Collaboration: '- Συνεργασία: Η ομαδική εργασία οδηγεί σε καλύτερα αποτελέσματα.',
        Innovation: '- Καινοτομία: Η συνεχής αναζήτηση νέων και βελτιωμένων τρόπων για την επίλυση προβλημάτων.',
        Dedication: '- Αφοσίωση: Δέσμευση στην ποιότητα και στην επίτευξη των στόχων.',
        Vision: 'Το όραμά μου είναι να γίνω ένας καταξιωμένος επαγγελματίας στον τομέα της πληροφορικής, συμβάλλοντας με τις γνώσης και τις δεξιότητές μου στη δημιουργία τεχνολογικών λύσεων που βελτιώνουν την καθημερινή ζωή των ανθρώπων.',
        aboutMe1: ' Έιμαι σπουδαστής στο ΣΑΕΚ ΔΕΛΤΑ 360 με ειδικότητα στον τομέα της Πληροφορικής, συγκεκριμένα ως Τεχνικός Εφαρμογών Πληροφορικής. Η τεχνολογία πάντα με ενθουσίαζε, γι`αυτό επέλεξα να ακολουθήσω μια καριέρα στην πληροφορική και τον προγραμματισμό. Κατά τη διάρκεια των σπουδών μου, έχω αποκτήσει γνώσεις σε διάφορες γλώσσες προγραμματισμού όπως HTML, CSS και JavaScript, οι οποίες μου επιτρέπουν να δημιουργώ λειτουργικές και αισθητικά ευχάριστες ιστοσελίδες.',
        aboutMe2: ' Επιπλέον, έχω μάθει να χρησιμοποιώ τεχνολογίες όπως η Python και η SQL, που μου δίνουν τη δυνατότητα να αναπτύσσω πιο σύνθετες εφαρμογές και να διαχειρίζομαι βάσεις δεδομένων. Η εκπαίδευσή μου δεν περιορίζεται μόνο στον προγραμματισμό, αλλά περιλαμβάνει επίσης την κατανόηση του πώς να σχεδιάζω και να υλοποιώ ολοκληρωμένες λύσεις που καλύπτουν τις ανάγκες των χρηστών.',
        aboutMe3: ' Αυτό που με διακρίνει είναι η ικανότητά μου να μαθαίνω γρήγορα και να προσαρμόζομαι σε νέες προκλήσεις. Μέσα από τα έργα και τις εργασίες που έχω ολοκληρώσει κατά τη διάρκεια των σπουδών μου, έχω αναπτύξει δεξιότητες ομαδικής συνεργασίας, διαχείρισης χρόνου και επίλυσης προβλημάτων. Αυτές οι εμπειρίες με έχουν βοηθήσει να κατανοήσω τη σημασία της προσεκτικής ανάλυσης των απαιτήσεων ενός έργου και της συστηματικής προσέγγισης για την υλοποίησή του.',
        aboutMe4: ' Στόχος μου είναι να συνεχίσω να εξελίσσομαι στον τομέα της πληροφορικής και να εφαρμόσω τις γνώσεις και τις δεξιότητές μου σε πραγματικά έργα που θα κάνουν τη διαφορά. Πιστεύω ακράδαντα ότι η τεχνολογία μπορεί να αλλάξει τον κόσμο προς το καλύτερο, και είμαι αφοσιωμένος στο να συμβάλλω σε αυτήν την αλλαγή με κάθε τρόπο που μπορώ.',
        aboutMe5: ' Στον ελεύθερο μου χρόνο, απολαμβάνω να εξερευνώ νέες τεχνολογίες και να μαθαίνω για τις τελευταίες εξελίξεις στον τομέα της πληροφορικής. Πάντα προσπαθώ να βελτιώνω τις γνώσεις και να παραμένω ενημερωμένος σχετικά με τις νέες τάσεις και τις καινοτομίες στον κλάδο μας. Ανυπομονώ να δω πού θα με οδηγήσει το πάθος μου για την πληροφορική στο μέλλον και να αναπτύξω ακόμα περισσότερες δεξιότητες που θα με βοηθήσουν να πετύχω τους επαγγελματικούς μου στόχους.',

        projectsIntro: 'Παρουσίαση σημαντικών εργασιών και projects που ολοκλήρωσα κατά τη διάρκεια των σπουδών μου.',
        project1: 'Προσωπικό Project',
        project11: 'Υπολογιστής Ηλικίας',
        project12: 'Περιγραφή: Μια εφαρμογή που υπολογίζει την ηλικία ενός χρήστη με βάση την ημερομηνία γέννησής του.',
        project13: 'Τεχνολογίες: HTML, CSS, JavaScript',
        project14: 'Χαρακτηριστικά: Είσοδος ημερομηνίας, υπολογισμός και εμφάνιση ηλικίας σε έτη.',
        project2: 'Προσωπικό Project',
        project21: 'Λίστα Εκκρεμοτήτων',
        project22: 'Περιγραφή: Μια διαδραστική εφαρμογή που επιτρέπει στους χρήστες να προσθέτουν, να αφερούν και να διαχειρίζονται τις καθημερινές τους εκκρεμότητες.',
        project23: 'Τεχνολογίες: HTML, CSS, JavaScript',
        project24: 'Χαρακτηριστικά: Προσθήκη και διαγραφή στοιχείων λίστας, σημάδεμα ως ολοκληρωμένα.',
        project3: 'Project Σχολής',
        project31: 'Κομπιουτεράκι σε C++',
        project32: 'Περιγραφή:  Ένα απλό κομπιουτεράκι γραμμένο σε C++, που υποστηρίζει βασικές αριθμητικές πράξεις όπως πρόσθεση, αφαίρεση, πολλαπλασιασμό και διαίρεση.',
        project33: 'Τεχνολογίες:  C++',
        project34: 'Χαρακτηριστικά:  Διασύνδεση χρήστη μέσω γραμμής εντολών, απλές αριθμητικές πράξεις, έλεγχος ορθότητας εισόδου.',
        project35: 'Σημείωση:  Το project δεν είναι ακόμη διαθέσιμο για δημόσια πρόσβαση. Επικοινωνήστε μαζί μου για περισσότερες πληροφορίες.',
        project4: 'Project Σχολής',
        project41: 'Ιστοσελίδα παρουσίασης της Apple',
        project42: 'Περιγραφή:  Ιστοσελίδα αφιερωμένη στην παρουσίαση της εταιρείας Apple, με πληροφορίες για την ιστορία της, τα προϊόντα της και το λογότυπό της.',
        project43: 'Τεχνολογίες: HTML, CSS',
        project44: 'Χαρακτηριστικά:  Δομημένη πλοήγηση με μενού, εικόνα λογοτύπου, παρουσίαση ιστορικών στοιχείων και προϊόντων, καθαρός σχεδιασμός με έμφαση στην αναγνωσιμότητα.',
        prohect45: 'Σημείωση: Το project δεν είναι ακόμη διαθέσιμο για δημόσια πρόσβαση. Επικοινωνήστε μαζί μου για περισσότερες πληροφορίες.',
        project5: 'Project Σχολής',
        project51: '3D Γεωμετρικά Σχήματα με OpenGL',
        project52: 'Περιγραφή:  Εφαρμογή σε C++ με χρήση της βιβλιοθήκης OpenGL/GLUT για την απεικόνιση βασικών 3D σχημάτων όπως σφαίρες, κώνους και τόρους, με δυνατότητα εμφάνισης σε γεμάτη ή wireframe μορφή.',
        project53: 'Τεχνολογίες:  C++, OpenGL, GLUT, Code::Blocks IDE',
        project54: 'Χαρακτηριστικά: Απόδοση 3D σχημάτων με χρώματα και υλικά, χρήση της GLUT για παραθυρική απεικόνιση, υποστήριξη γεμάτης και πλέγματος (wireframe) μορφής.',
        project55: 'Σημείωση: Το πρόγραμμα εκτελείται σε περιβάλλον Code::Blocks και χρησιμοποιεί τον GNU GCC Compiler. Απαιτεί εγκατάσταση OpenGL βιβλιοθηκών.',
        project6: 'Project Σχολής',
        project61: '3D Μοντέλο Χριστουγεννιάτικου Δέντρου',
        project62: 'Περιγραφή:  Μοντέλο χριστουγεννιάτικου δέντρου που δημιουργήθηκε στο Autodesk 3ds Max 2024 (εκπαιδευτική έκδοση). Το δέντρο περιλαμβάνει πράσινα επίπεδα που προσομοιώνουν τα κλαδιά, έναν καφέ κορμό και ένα κίτρινο αστέρι στην κορυφή, εμφανιζόμενο σε προβολή προοπτικής.',
        project63: 'Τεχνολογίες: Autodesk 3ds Max 2024, 3D μοντελοποίηση, rendering, animation',
        project64: 'Χαρακτηριστικά:  Χρήση διαφορετικών επιπέδων για την απεικόνιση της δομής του δέντρου, ενσωμάτωση χρωμάτων και υλικών, υποστήριξη προοπτικής προβολής και επεξεργασίας επιφανειών.',
        project65: 'Σημείωση: Το project δεν είναι ακόμη διαθέσιμο για δημόσια πρόσβαση. Επικοινωνήστε μαζί μου για περισσότερες πληροφορίες.',
        project7: 'Project Σχολής',
        project71: 'Android Studio - Σχεδιασμός UI',
        project72: 'Περιγραφή: Ανάπτυξη εφαρμογής Android χρησιμοποιώντας το Android Studio, με έμφαση στη διαμόρφωση του UI και στη δομή των στοιχείων. Το έργο περιλαμβάνει την οπτικοποίηση και την επεξεργασία του interface της εφαρμογής.',
        project73: 'Τεχνολογίες: Android Studio, Java, XML, Material Design',
        project74: 'Χαρακτηριστικά:  Διαμόρφωση στοιχείων UI, προεπισκόπηση σχεδιασμού, δυνατότητα επεξεργασίας και προσαρμογής των views, υποστήριξη διαφορετικών διατάξεων και responsive σχεδίασης.',
        project75: 'Σημείωση: Το project δεν είναι ακόμη διαθέσιμο για δημόσια πρόσβαση. Επικοινωνήστε μαζί μου για περισσότερες πληροφορίες.',
        project8: 'Project Σχολής',
        project81: 'Σχεδιασμός Διεπαφής Χρήστη στο Figma',
        project82: 'Περιγραφή: Σχεδιασμός και πρωτοτυποποίηση διεπαφής χρήστη (UI) χρησιμοποιώντας το Figma. Το έργο εστιάζει στη δημιουργία responsive layouts, στη διαχείριση στιλιστικών επιλογών και στην αλληλεπίδραση με το σχεδιασμό εφαρμογών.',
        project83: 'Τεχνολογίες: Figma, UI/UX Design, Prototyping, Vector Graphics',
        project84: 'Χαρακτηριστικά: Δημιουργία προσαρμόσιμων στοιχείων UI, χρήση Auto Layouts, εφαρμογή διανυσματικών γραφικών και στιλιστικών εφέ, υποστήριξη αλληλεπίδρασης μέσω πρωτοτύπων.',
        project85: 'Σημείωση: Το σχέδιο δημιουργήθηκε στο Figma με δυνατότητα κοινής επεξεργασίας και εξαγωγής σε διαφορετικές μορφές για ανάπτυξη εφαρμογών.',
        project9: 'Ομαδικό Project Web Development',
        project91: 'Δημιουργία Δυναμικής Ιστοσελίδας',
        project92: 'Περιγραφή: Ομαδική εργασία για την ανάπτυξη μιας δυναμικής ιστοσελίδας χρησιμοποιώντας HTML, CSS, JavaScript, PHP και SQL. Στόχος είναι η δημιουργία ενός πλήρους συστήματος, το οποίο επιτρέπει την αλληλεπίδραση των χρηστών και την αποθήκευση δεδομένων σε βάση.',
        project93: 'Τεχνολογίες: HTML, CSS, JavaScript, PHP, MySQL, Responsive Web Design',
        project94: 'Χαρακτηριστικά: Δυναμική πλοήγηση και διαχείριση περιεχομένου, responsive σχεδίαση για βελτιωμένη εμπειρία χρήστη, σύνδεση με βάση δεδομένων για αποθήκευση και επεξεργασία δεδομένων, εφαρμογή JavaScript για διαδραστικότητα.',
        project95: 'Σημείωση: Το project αναπτύχθηκε από δύο μέλη της ομάδας και χρησιμοποιεί τεχνολογίες web development για τη δημιουργία μιας λειτουργικής και μοντέρνας ιστοσελίδας.',
        project10: 'Project Σχολής',
        project101: 'Κατασκευή Ιστοσελίδας με WordPress',
        project102: 'Περιγραφή: Ανάπτυξη δυναμικής ιστοσελίδας χρησιμοποιώντας WordPress, με έμφαση στη δομή, το responsive design και τη βελτιστοποίηση περιεχομένου. Το έργο περιλαμβάνει τη δημιουργία θεμάτων, προσθήκη plugins και διαχείριση δεδομένων.',
        project103: 'Τεχνολογίες: WordPress, CMS, Plugins, SEO Optimization',
        project104: 'Χαρακτηριστικά: Χρήση προσαρμοσμένων θεμάτων (OceanWP), βελτιστοποίηση SEO, διαχείριση περιεχομένου μέσω CMS, προσθήκη δυναμικών λειτουργιών με plugins.',
        project105: 'Σημείωση: Η ιστοσελίδα αναπτύχθηκε με βάση το WordPress για εύκολη διαχείριση και επεκτασιμότητα.',



        
        Experience1: '- Προετοιμασία για τον Κόσμο της Πληροφορικής   "Ως σπουδαστής ΣΑΕΚ ΔΕΛΤΑ, ειδικότητα Τεχνικός Εφαρμογών Πληροφορικής, βρίσκομαι σε ένα συναρπαστικό ταξίδι εκπαίδευσης και προετοιμασίας για μια καριέρα στην πληροφορική. Καθημερινά αναπτύσσω τις δεξιότητές μου μέσα από τα μαθήματα, τις εργασίες και τις πρακτικές εφαρμογές που μας ανατίθενται.',
        Experience1v1: 'Κατά τη διάρκεια της εκπαίδευσής μου, έχω εμβαθύνει σε βασικούς τομείς της πληροφορικής όπως ο προγραμματισμός, η ανάπτυξη ιστοσελίδων και οι βάσεις δεδομένων. Εργάζομαι πάνω σε projects που προσομοιώνουν πραγματικές συνθήκες εργασίας, δίνοντάς μου την ευκαιρία να κατανοήσω καλύτερα τις απαιτήσεις του κλάδου."',
        Experience2: '- Αναπτύσσοντας Εργασιακές Δεξιότητες Μέσω της Εκπαίδευσης  "Μέσω των διαφόρων project και των ομαδικών εργασιών, έχω μάθει να συνεργάζομαι αποτελεσματικά με άλλους φοιτητές, να ανταλλάσσω ιδέες και να βρίσκω λύσεις σε τεχνικά προβλήματα. Αυτή η εμπειρία με έχει βοηθήσει να αναπτύξω σημαντικές δεξιότητες όπως η επικοινωνία, η οργάνωση και η επίλυση προβλημάτων."',
        Experience3: '- Σχεδιασμός για το Μέλλον "Παρόλο που είμαι ακόμα στη φάση της εκπαίδευσης, η συνεχής μάθηση και η εξάσκηση με κάνουν να αισθάνομαι έτοιμος για τα επόμενα βήματα. Ανυπομονώ να εφαρμόσω τις γνώσεις μου σε πραγματικά projects και να αποκτήσω πρακτική εμπειρία, καθώς συνεχίζω να εξελίσσομαι στον τομέα της πληροφορικής. Βλέπω τον εαυτό μου να συμβάλλει ουσιαστικά σε ένα δυναμικό περιβάλλον εργασίας, όπου θα μπορώ να αξιοποιήσω τις γνώσεις και τις δεξιότητές μου για να δημιουργήσω καινοτόμες λύσεις."',
        Experience4: '- Για το Βιογραφικό Μου "Εάν ενδιαφέρεστε να μάθετε περισσότερα για τις δεξιότητές μου ή να λάβετε το βιογραφικό μου, παρακαλώ Επικοινωνήστε μαζί μου μέσω της ενότητας επικοινωνίας. Προτιμώ να διατηρώ το βιογραφικό μου ιδιωτικό και διαθέσιμο μόνο σε όσους εκδηλώνουν ενδιαφέρον."',

        contactIntro: 'Για οποιαδήποτε ερώτηση ή αίτημα σχετικό με το βιογραφικό μου, παρακαλώ χρησιμοποιήστε τη φόρμα επικοινωνίας που ακολουθεί. Συμπληρώστε τα απαραίτητα πεδία και περιγράψτε το θέμα σας με σαφήνεια για να μπορέσω να σας απαντήσω με ακρίβεια. Θα προσπαθήσω να σας απαντήσω το συντομότερο δυνατόν. Σας ευχαριστώ για το ενδιαφέρον σας και ανυπομονώ να σας εξυπηρετήσω.',
        name: 'Όνομα',
        email: 'Email',
        message: 'Μήνυμα',
        send: 'Αποστολή',
        contactInfo: 'Πληροφορίες Επικοινωνίας'
    }
};

