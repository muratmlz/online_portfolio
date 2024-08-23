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

