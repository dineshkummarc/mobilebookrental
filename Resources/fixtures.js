TW.Fixtures.books = [
	{bookId: '1', isbn: '9780451191144', posterUrl: 'images/1.png', title: 'Atlas Shrugged', author: 'Ayn Rand', publisher: 'Random House', description: 'Atlas Shrugged is a novel by Ayn Rand, first published in 1957 in the United States. Rand\'s fourth and last novel, it was also her longest, and the one she considered to be her magnum opus in the realm of fiction writing. Atlas Shrugged includes elements of mystery and science fiction, and it contains Rand\'s most extensive statement of Objectivism in any of her works of fiction.'},
	{bookId: '2', isbn: '9780451191151', posterUrl: 'images/2.png', title: 'The Fountainhead', author: 'Ayn Rand', publisher: 'Random House', description: 'The Fountainhead is a 1943 novel by Ayn Rand. It was Rand\'s first major literary success and brought her fame and financial success. More than 6.5 million copies of the book have been sold worldwide'},
	{bookId: '3', isbn: '9780375706851', posterUrl: 'images/3.png', title: 'My name is Red', author: 'Orhan Pamuk', publisher: 'Alfred A. Knopf', description: 'My Name Is Red (Benim Adım Kırmızı) is a 1998 Turkish novel by Nobel laureate author Orhan Pamuk. The English translation won the International IMPAC Dublin Literary Award in 2003. The French version won the French Prix du Meilleur Livre Étranger and the Italian version the Premio Grinzane Cavour in 2002. The novel and its English translation established Pamuk\'s international reputation and contributed to his winning of the Nobel prize.'},
	{bookId: '4', isbn: '9781451648539', posterUrl: 'images/4.png', title: 'Steve Jobs - iSteve, the book of Jobs', author: 'Sir Walter Isaacson', publisher: 'Simon & Schuster', description: 'Steve Jobs is the authorized biography of Steve Jobs. The biography is written at the request of Jobs by acclaimed biographer Walter Isaacson, a former executive at CNN and Time who has written best-selling biographies about Benjamin Franklin and Albert Einstein.'},
	{bookId: '5', isbn: '9781400063512', posterUrl: 'images/5.png', title: 'The Black Swan: The Impact of the Highly Improbable', author: 'Nassim Nicholas Taleb', publisher: 'Random House', description: 'The Black Swan: The Impact of the Highly Improbable is a literary/philosophical book by the epistemologist Nassim Nicholas Taleb. The book focuses on the extreme impact of certain kinds of rare and unpredictable events (outliers) and human\'s tendency to find simplistic explanations for these events retrospectively, after the fact. This theory has since become known as the black swan theory.'},
	{bookId: '6', isbn: '9781587990717', posterUrl: 'images/6.png', title: 'Fooled by Randomness', author: 'Nassim Nicholas Taleb', publisher: 'Random House', description: 'Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets is a book written by Nassim Nicholas Taleb about the fallibility of human knowledge.'},
	{bookId: '7', isbn: '9780060903251', posterUrl: 'images/7.png', title: 'Lateral Thinking - Creativity Step by Step', author: 'Edward de Bono', publisher: 'Harper & Row', description: 'Lateral thinking is solving problems through an indirect and creative approach, using reasoning that is not immediately obvious and involving ideas that may not be obtainable by using only traditional step-by-step logic. The term lateral thinking was coined by Cherry Thomas.'},
	{bookId: '8', isbn: '9780316178310', posterUrl: 'images/8.png', title: 'Six Thinking Hats', author: 'Edward de Bono', publisher: 'Harper & Row', description: 'The de Bono Hats system (also known as "Six Hats" or "Thinking hats") is a thinking tool for group discussion and individual thinking. Combined with the idea of parallel thinking which is associated with it, it provides a means for groups to think together more effectively, and a means to plan thinking processes in a detailed and cohesive way. The method is attributed to Dr. Edward de Bono and is the subject of his book, Six Thinking Hats'},
	{bookId: '9', isbn: '9380200125', posterUrl: 'images/9.png', title: 'Romancing the Balance Sheet', author: 'Dr. Anil Lamba', publisher: 'TV18', description: 'Romancing the Balance Sheet by Dr. Anil Lamba is a surprisingly interesting endeavor, seeking to de-mystify the concept of finance management and to get us all involved a little more profitably in our own lives.'},
	{bookId: '10', isbn: '9781567314052', posterUrl: 'images/10.png', title: 'Five Equations That Changed the World: The Power and Poetry of Mathematics', author: 'Michael Guillen', publisher: 'Harper & Row', description: 'Five Equations That Changed the World: The Power and Poetry of Mathematics is a book written by Michael Guillen in 1995. It is divided into five chapters that talk about five different equations in physics and the people who have developed them'}
];

TW.Fixtures.recommendedBooks = [ 
	{bookId: '1', recommendedBookId : ['2']},
	{bookId: '2', recommendedBookId : ['1', '3']},
	{bookId: '3', recommendedBookId : ['1', '3']},
	{bookId: '4', recommendedBookId : ['5', '2', '1']},
	{bookId: '5', recommendedBookId : ['8', '5']},
	{bookId: '6', recommendedBookId : ['7', '8']},
	{bookId: '7', recommendedBookId : ['9']},
	{bookId: '8', recommendedBookId : ['7']},
	{bookId: '9', recommendedBookId : ['10']},
	{bookId: '10', recommendedBookId : ['3', '9']}
];

TW.Fixtures.allLocations = [
	{id: '1', name: 'Just Books J P Nagar', latitude: '12.9016672', longitude: '77.58250149999999'},
	{id: '2', name: 'Just Books Indira Nagar', latitude: '12.9268435', longitude: '77.6697939'},
	{id: '3', name: 'Just Books Bilekahalli', latitude: '12.8973484', longitude: '77.61065119999999'},
	{id: '4', name: 'Just Books Brookefield', latitude: '12.9559864', longitude: '77.721662'},
	{id: '5', name: 'Just Books Try', latitude: '12.838383', longitude: '77.737373'}
];

TW.Fixtures.availabilityDetails = [{bookid: '1', availability:[
		{locationId: 1, availableCopies: 1},
		{locationId: 2, availableCopies: 3},
		{locationId: 5, availableCopies: 7}]
	},
	{bookid: '2', availability:[
		{locationId: 1, availableCopies: 1},
		{locationId: 2, availableCopies: 2},
		{locationId: 3, availableCopies: 1}
	]},
	{bookid: '3', availability:[
		{locationId: 4, availableCopies: 1},
		{locationId: 2, availableCopies: 3},
		{locationId: 5, availableCopies: 7}]
	},
	{bookid: '4', availability:[
		{locationId: 2, availableCopies: 3},
		{locationId: 5, availableCopies: 7}]
	},
	{bookid: '5', availability:[
		{locationId: 6, availableCopies: 11}
	]},
	{bookid: '6', availability:[
		{locationId: 2, availableCopies: 10}
	]},
	{bookid: '7', availability:[
		{locationId: 2, availableCopies: 1}
	]},
	{bookid: '8', availability:[
		{locationId: 1, availableCopies: 1},
		{locationId: 2, availableCopies: 3},
		{locationId: 5, availableCopies: 7}
	]},
	{bookid: '9', availability:[
		{locationId: 1, availableCopies: 1},
		{locationId: 2, availableCopies: 3},
		{locationId: 5, availableCopies: 7}
	]},
	{bookid: '10', availability:[
		{locationId: 1, availableCopies: 1},
		{locationId: 2, availableCopies: 1},
		{locationId: 5, availableCopies: 1}
	]}
];
