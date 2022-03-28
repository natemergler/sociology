/* layout for article pages !
!!MAKE SURE TO ADD NAME TO allApproach LIST!!
const articleName = {
  link: 
  title:

  approach;

  unit:

  content:
}
*/

const socio = {
  main : {
    link: "socio.main",
    title: "Sociology", 
  
    unit: "intro", 
  
    content:"<p>Sociology is the systematic, scientific study of human society or social structures (always focuses on groups). Social Structures are patterned way in which people interact in social relationships. The sociological perspective is interested in the patterns of behavior shared by member of a group or society and how actions and beliefs change society and culture overtime.</p> <p>Applying the sociological perspectives can help guide many of the laws and policies, it can lead to important personal growth and expanded awareness and can be good preparation for the world at work.</p>"
  },

  culture : {
    link: "socio.culture",
    title: "Culture", 
    
    unit: "intro", 
    
    content:"<p>Culture refers to the beliefs, values, behaviors , and material objects that together from a persons way of life and are passed down generation to generation. </p><p>Intra-Culture refers to differences in culture within a society. </p> <p>Cross Culture refers to diversity in culture between societies. </p> <p>Society is a group of people that live in a defeined territory and participate in a common culture. </p> <p>Culture is a share way of life, but is different thatn a nation (political) or society (see above). </p> <p><b>Function</b> of Culture</p><ul><li>Communication : common language</li> <li>Perception : how we see the world</li> <li>Identity : how we see ourselves and others</li> <li>Value Systems : education, media, religion... source of values </li><li>Motivation : sanctions, encourage or discourage behavior </li><li>Stratification : 're-class' , functional because inceptives motivate people </li><li>Production / Consumption : what we need , use and value</li> </ul><p><b>Basic Components</b> of Culture</p><ul><li>Nonmaterial Culture : intangible creations of human society </li><li>Material Culture : tangible products of human society </li></ul><p><b>Elements</b> of Culture</p><ul><li>Ideal Culture : social patterns mandated by cultural values and norms</li><li>Real Culture : actual social patterns that only approcximate cultural edxpectations</li><li>Customs : established and accepted, cultural practices / behaviors</li><li>Values : culturally defined standards by which people judge ; serve as broad guidelines for social living ; values are broad ideas that underlie <u>beliefs</u></li><li>Norms : influenced by values, rules and expectations by which a society guides the behavior of its members </li></ul><p><u>Cultural Lag</u> refers to the ffact that cultural elements change at difference rates, which may disrupt the cultural system </p><ul><li>Roles : situational and played in relation to other roles</li><li>Ideologies : focused around fundamental beliefs ; trying to explain something</li><ul><li>meaning of life</li><li>family organization</li><li>supperiority / inferiority</li></ul></ul><p><u>Material Culture</u> reflects a societies values and a society's technology, the knwoledge that people apply to the task of living in their surroundings.</p><p>Symbols : anything that carries a particular meaning recognized by people who share a culture </p><p><u>Cultural Variation</u> : differences in social behavior that different cultures exhibit around the world </p><p><b>Ethnocentrism</b> : the practicve of juding another culture by the standards of one's culture</p><p><b><u>Cultural Relativism</u></b> : the practice of judging a culture by its own standards <br>Globalized Culture : societies are increasingly interconnectly, making traditional distinctions between 'us' and 'them' less and less valid<p>"
  },
  
  social : {
    link: "socio.social",
    title: "Socialization",
  
    unit: "intro",
  
    content: "<p>Humans need social experience to learn culture and survive. Sociologists view nurture (socialization) as much more important than nature (biological) in shaping human behavior.</p>"
  },

  agentsPrimary : {
    link: "socio.agents",
    title: "Agents of Socialization",
  
    unit: "intro",
  
    content: "<p>Primary Agents of Socialization: Family and Peer Groups</p><ol><li>Family</li><p>The family is crucial. Varies markedly by social class.</p><ul><li>Learn, make mistakes in safe environment</li><li>Early education on gender roles</li><li>Not all intentional, children learn from the type of environment created by the adults.</li><li>see the world as safe vs. dangerous, see themselves as loved or tolerated, smart or stupid, gender roles vs. not</li></ul><p>Significant Others- Those that are most important to sue and whose opinion we value.</p><li>Peer Groups</li><p>Peer Groups- composed of members with similar interests, social position and age allow children to discuss topics of little interest to adults or considered taboo.<p><ul><li>Peer roles change with age…but remain valuable</li></ul><p>Peer groups are important</p><ul><li>Tend to view your peer group in positive terms and put down other groups</li><li>Influenced by peer groups you would like to join</li></ul><p>Children may belong to several peer groups</p><p>Peer groups promote independence from family due to differing norms</p><ul><li>Age-appropriate behavior</li><li>Social Sanctions</li><li>Allows practice with decision making</li><li>Suburban communities, two income families and single parent families has resulted in children spending more time with peers as they get older</li><li>Peer Pressure- Once of the strongest forces that cause us to conform</li></ul>"
  }

}; 

const struc = {

  main : {
    link: "struc.main",
    title: "Structuralism", 
    
    unit: "intro", 
    
    content:"<p>Structuralism is a macro sociological theory that underlying forces (institutions) are responsible for the development and sociological problems of societies.</p>"
  }

}

const interact = {

  main : {
    link: "interact.main",
    title: "Interactionism", 
    
    unit: "intro", 
    
    content:"<p>Interactionaism is a micro sociological theory that meaning is produced through the interactions of individuals. The social Interaction is a face to face process consisting of action, reactions and mutual adaptation.</p>"
  }

}



// list all const that are subjects
let allApproach = [socio, struc, interact]
//inserts buttons/links for in content of each article.

for (let i in allApproach) {
  approach = allApproach[i]
  
  for (let individualArticle in approach) {

    
   text = approach[individualArticle]

    text.content = text.content.replace(/sociology|sociological/gi, function (x) {
      return '<button onClick="pagecontent(socio.main)">'+x+'</button>'});

    text.content = text.content.replace(/society/gi, function (x) {
      return '<button class="socio.culture" onClick="pagecontent(socio.culture)">'+x+'</button>'});

      text.content = text.content.replace(/socialization/gi, function (x) {
        return '<button class="socio.social" onClick="pagecontent(socio.social)">'+x+'</button>'})

  }
//the function replaces inserts button with label of the original text
/*
    allApproach[i].content = allApproach[i].content.replace(/sociology|sociological/gi, function (x) {
      return '<button onClick="pagecontent(main)">'+x+'</button>'});

    allApproach[i].content = allApproach[i].content.replace(/society/gi, function (x) {
      return '<button id="culture" onClick="pagecontent(culture)">'+x+'</button>'});
*/
}

//create the nav bar
for (let i in allApproach) {
  title = allApproach[i];
  for (let x in title){
    article = title[x]
    document.getElementById("nav").innerHTML += '<button class="'+article.link+'" onClick="pagecontent('+article.link+')">'+article.title+'</button>';
  }
  /*document.getElementById("nav").innerHTML += '<button id="'+title.link+'" onClick="pagecontent('+title.link+')">'+title.title+'</button>';*/
}

//sets default main page
document.getElementById("title").innerHTML = socio.main.title;
document.getElementById("content").innerHTML = socio.main.content;

//function that replaces content in site dynamically
function pagecontent(selection){


//this replaces hashtags with clickable buttons
  /*selection.content = selection.content.replace(/sociology/gi, '<button onClick="pagecontent(main)">Sociology</button>');
  selection.content = selection.content.replace(/sociological/gi, '<button onClick="pagecontent(main)">sociological</button>');*/
  
//this replaces elements in the index.html with what is clicked
  document.getElementById("title").innerHTML = selection.title;
  document.getElementById("content").innerHTML = selection.content;
}

