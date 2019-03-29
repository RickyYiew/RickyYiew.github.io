var status = "home";
var first = true;

var scene = "Empress Dowager's Room",
    dayNow = 0,
    progress = 0,
    power = 75,
    partyPower = 75,
    pass,
    meeting = "eunuch",
    eunuchMeet = 0,
    GCMeet = 0;

// UI elements
var i = 0,
    j = 0,
    k = 0;
var startBtn,
    dialogName,
    dialogText,
    proceed,
    mask,
    choiceBtn1,
    choiceBtn2,
    choiceBtn3,
    choiceBtn4,
    op1, op2, op3, op4, op5, op6, op7, op8, op9, op10, op11, op12, op13, op14,
    opNow = false,
    solution,
    progressChange,
    poleChange,
    GCHead,
    MChead,
    progressFill = 0,
    afterCourtPlan = false,
    planCount = 0;



// Characters
var empress;
var party1, party2, party3, party4, party5, party6, party7, party8, party9, party10;

// Animations
var count = 0;
var arrowAnimation;
var sunR = 176,
    sunA = 255,
    swell = true,
    rectA = 0,
    bgRectA = 0,
    bgRectCount = 0,
    bgChangeRect = false,
    bgOrder = 1,
    allWhite = false,
    starChange = 0,
    lightR1 = 48,
    lightR2 = 55,
    lightA = 255,
    lightCount = 0,
    locationA = 0,
    bubbleCount = 0,
    bubbleX1 = 840,
    bubbleX2 = 195,
    bubbleR1 = 1,
    bubbleR2 = 1,
    silkCount = 0,
    silkA = 255,
    stringY = -135,
    stringMove = -227.5,
    stirngDirection = "",
    topBarA1 = 255,
    topBarA2 = 255,
    progressDemo = true,
    GCA = 255,
    MCA = 255,
    speakerCount = 0,
    opCount = 0,
    solutionY = 265,
    solutionA = 0,
    passY = 235,
    passA = 0,
    ODMA = 0,
    ODMR = 0;



// Text
var introGeneral = true,
    GCIntro = false,
    EIntro = false,
    strategyIntro = false,
    MCIntro = false,
    studyEnd = false,
    GCRepeat = false,
    ERepeat = false,
    update = false;

var bgStoryText = ["Hundreds of years ago, in the land of China, a lasting war devastated people's lives. The country was ripped into separate pieces while its people were brutally robbed and struggled to survive in misery.", "But one night in a small village, people reported seeing eerie lights emitting from a house. They rushed there to see what was going on but only to see the birth of a healthy boy. Without knowing why, they all thought they saw a dragon at that moment. They knew he was destined to make a change.", "The boy grew up quickly and became the hero of the country. He led a strong army to defeat all of the warlords and unified the entire China. He brought peace and order back to this place.", 'While people knelt down before him and touched the ground with their forehead to express thankfulness, this hero declares himself as the "Son of the Heaven". He said it was the "Mandate of the Heaven" for him to rule this land and lead its people. He rose up to the throne and became the emperor of China.', "That was the story you heard about how your father became the emperor. While it might not be absolutely accurate, at least it gave you a sense of how holy this position was. Now, with years gone by, your father got old and sick. He knew he couldn't be on the throne for too long.", "However, he had already planned on this. He set you as the crown prince of the dynasty, heir to the throne. He asked the best teachers to teach you literature, combat skills, politics, and art. He hoped one day you could rule this nation as good as him.", "At the age of 17, your father passed away. As the young successor, there's no time for you to cry. You need to get prepared for the coronation.", "As promised to your father, you were determined to be a great emperor and make best decisions for your people.", "However, sitting on the throne was never an easy task. What you saw was the glamorous power as the emperor. But what you didn't see was all of the political drama and fights behind it.", "Are you ready to be an emperor? Can you lead your country towards the greatest era? Or can you even survive?"]
var introText = ["However, it’s not always easy to be an emperor. There will be so many threats along your way. You must stay alert and make the best decisions.", "Learn this lesson well: the emperor cannot rule on a whim. You will need allies to support your decisions. People in the court can refuse to proceed with your decisions if nobody stands by you. ", "You’ll meet different people in the court, such as the Grand Chancellor and the Eunuch. You must distinguish those who threaten your rule. ", "Mother will always support you. Do you have any questions for me?", " ", "Excellent, my son! It's such a pleasure to see the determination on your young face! To help your endeavors, I'll give you a family heirloom. The magical silk painting on your right will warn you if powers in your court are improperly balanced. ", "The Grand Chancellor is at the top while the Eunuch is at the bottom. You’re the man wearing a yellow robe, hanging precariously in the middle. This can show you the current threats of both sides. It will dynamically change based on your choices. ", "When one side is too powerful, that political player will draw you closer. You need to stay away from both sides. If you get caught by either side, you will face a rebellion.", "Now the Grand Chancellor is more powerful so you're closer to him. Try to think about how you can use another force to pull you away from him. ", "Now I’ll tell you the first mission as an emperor. ", "By now you have heard your father's report of suspicious military activity along our border with Mongolia. They may invade sooner than we thought. Our preparation towards the war has been halted due to your father’s death. We don’t have much time left. ", "To make matters worse, the influencers in your court are preoccupied squabbling over their personal interests. You need to try your best to ask them to enforce the policy to prepare for the war.", "The bar at the top will show your progress towards the war preparation.", "You need to fill the bar in five days. Meanwhile, be aware of potential political threats!", "Good luck, my son! I believe you can bring glory to our dynasty."]
var GCIntroText = ["Grand Chancellor Li is the emperor’s royal advisor and the head of the court. Li has been serving for the court for more than 40 years. He has accumulated much prestige and many allies in the court. ", "He might be helpful in dealing with some of the national issues. But he can also easily use his power to influence the court and override your commands. You must be careful, my son!"];
var EIntroText = ["We all know that Eunuchs are the royal servants who take care of our daily life in the inner chamber of the palace. You might regard them as the most trustworthy companions since you have grown up with them.", "But you would do well to remember they can be political allies as well. As far as I know, Eunuch Wang has connection with some people who can speak for you. I'm pretty sure Minister Chen is one of his puppets in the court.", "When you don’t trust those scholar officials in the court, try giving some of your power to the eunuchs. But still, make sure that they don't become too powerful. They may be good at flattery, but they can make hell for you when they have too much influence. "]
var strategyIntroText = ["My son, you need to remember the only way to maintain your power is to have a balance of Yin and Yang. Everyone is capable of causing trouble for you at a certain point. You have to maintain your power to do what is best. ", "Consider playing one group against the other to humble them. When the two groups are busy clashing with each other, you can stand firmly in the middle."]
var day1Text = ["Good morning, your majesty! I'm Grand Chancellor Li. It’s our honor to serve you and help you solve problems for our country. Please allow me to represent the whole court to give you a brief introduction of the work we do.", "Everyday we’ll discuss a major issue in the court. The other ministers and I might offer different solutions to an issue. Ultimately, you decide which course of action to follow.", "But please be cautious, your majesty. If a majority of your ministers don’t agree with your decision, we will not be able to execute it.", "I have encourged the whole court to publicly express their opinions when a solution is proposed. You will be able to know how many people support the idea.", "Good morning, your majesty! Please allow me to introduce myself. My name is Minister Chen. I have served as a royal advisor to make contribution to our country for a long time.", "I firmly believe a decision maker will be enlightened if he can listen to different opinions. So, I will bring an alternative idea everyday to give you more options.", "Now it's time to start our discussion today.", "I am sure you have heard of the impending war with the Mongolians. The government needs a consistent source of revenue to maintain our advantage in the potential war. We shall discuss a solution today.", "Here’s my solution. I notice we have spent a huge amount of money on your recreational activities. I think being thrifty is always a good virtue every emperor follows.", "So, I would suggest you to cut your recreational expenses. Then we can use the money to support our army.", "I don’t think we should make our emperor sacrifice himself.", " My solution is to impose more taxes on the businessmen in the south. Their business is booming. But they have not been properly regulated.", "If we start to impose taxes on them. It'll be a constant revenue for the war preparation.", "Now, please make the decision, your majesty."
]
var day1Name = ["Grand Chancellor Li", "Grand Chancellor Li", "Grand Chancellor Li", "Grand Chancellor Li", "Minister Chen", "Minister Chen", "Grand Chancellor Li", "Grand Chancellor Li", "Grand Chancellor Li", "Grand Chancellor Li", "Minister Chen", "Minister Chen", "Minister Chen", "Grand Chancellor Li"]
var eunuchIntroText = ["I'm deeply sorry to see you look tired and pensive after court today. I know it’s tough to hold court and make people listen to you on the first day. As your closest and most loyal servant, I'd like to give you some suggestions if you would do me the honor.", "Grand Chancellor Li might seem helpful at this moment, but please be careful. He has plenty of allies in the court. He can easily manipulate and control what’s going on there.", "Your ancestors realized the importance of balancing the power of the Grand Chancellor, so they established a secret agency called Eastern Depot. It’s run by us, the eunuchs. ", "We can help the emperor to probe into those ministers’ life in case they are plotting anything evil. If it is your will, we can investigate the Grand Chancellor and his allies.", "In the meantime, I suggest you to find someone who can speak for you in the court.", "I think Minister Chen is a wise and personable figure. He also has the courage to stand against the Grand Chancellor. He’s an influential person and has the potential to build up a party to fight against the Grand Chancellor.", "Why don’t we give him some rewards and bring in some of his allies? I think there are openings in the court we can fill with his people. ", "I can always be of service if you should require it.", "Thanks for trusting me, your majesty.", "I will bring your message to Minister Chen. You should expect to see some differences in court tomorrow."]
var day2Text = ["Good morning, your majesty! The economy in the south is booming. The government has perceived a noticeable gain in the tax income. Today, the court will discuss where the government should spend this money.", "Please allow me to present my opinion on this.", "The raise in tax income comes from the business industry in the south. So, I think we should do something to reward the businessmen's hard work.", "I would advise us to spend the money on building a canal in the south. The canal can improve the efficiency in transportation, which can be a boost in more future tax income.", "Your majesty, I'm unable to agree with Grand Chancellor's idea. I'll provide my insight for your reference.", "I think the imminent war is our urgency. We still lack weapons and armors to equip our newly recruited army.", "Though the southern economy is important, I still suggest us to put war preparation as our first priority and spend money on buying more equipment.", "Now, please make the decision, your majesty."]
var day2Name = ["Grand Chancellor Li", "Grand Chancellor Li", "Grand Chancellor Li", "Grand Chancellor Li", "Minister Chen", "Minister Chen", "Minister Chen", "Grand Chancellor Li"]
var day3Text = ["Greetings, your majesty. We have finished recruiting this year’s conscript labor. They are ready to serve our country. Today, the court needs to figure out which tasks should be assigned to them.", "Please allow me to present my opinion on this.", "I believe we should send our workers to construct the infrastructure in the South, especially the canal I have proposed yesterday.", "I know some people in the court might not be able to agree with me. But like what I have said before, this will definitely bring benefits to the economic development, which will bring a constant raise in the governmental revenue.", "Unfortunately, I have to stand up against Grand Chancellor's idea again.", "I think we still need a stronger defense system at the border. We need to prioritize the war preparation since we don't have much time left.", "I would suggest us to send the workers to build the defense at the border.", "Now, please make the decision, your majesty."]
var day3Name = ["Grand chancellor Li", "Grand chancellor Li", "Grand chancellor Li", "Grand chancellor Li", "Minister Chen", "Minister Chen", "Minister Chen", "Grand chancellor Li"]
var day4Text = ["Good morning, I hope all is well with you. Every year, the delegates from Korea will come to our nation and trade their local specialty for our precious treasure. I would advise the court to discuss what we want to import specifically from this trade.", "Please allow me to present my opinion on this.", "I believe we should ask Koreans to trade their best horses with us.", "I am fully aware of the urgency of preparing for the war, so I would suggest us to import more horses to ease the shortage of our war supplies.", "I'm sorry. I think Grand Chancellor totally missed the point there.", "I think the best thing from Korea is their ginseng and diamonds. Those are the somthing we don't usually produce. It would do us good if we import them.", "We can tackle the horse supply problem in another way although I don't believe this is our most urgent issue right now.", "Now, please make the decision, your majesty."]
var day4Name = ["Grand chancellor Li", "Grand chancellor Li", "Grand chancellor Li", "Grand chancellor Li", "Minister Chen", "Minister Chen", "Minister Chen", "Grand chancellor Li"]
var day5Text = ["Good morning, your majesty! I think we have been discussiong a lot about the preparation for the war. But there’s one more thing left. We need to appoint a general to lead our army. This person should be able to bring victory to us.", "Please allow me to present my opinion on this.", "General Yang is a renowned general with lots of experience in military strategies and combat skills. He fought with your father and won most of the battles. He was a national legend to us all. ", "Although he has retired, I believe if we show our greatest sincerity, he’ll be willing to come back and serve our country again.", "Unfortunately, I have to disagree with Grand Chancellor since I believe General Yang is too old for this position.", "I think we need some new blood and a truly loyal person to lead our army. Why not just choose one of your closest friends as the general?", "Eunuch Wang has been serving you and giving you support for years. He always knows what’s the best for our country. So, I would also believe he’ll be a good fit to lead the army.", "Now, please make the decision, your majesty."]
var day5Name = ["Grand chancellor Li", "Grand chancellor Li", "Grand chancellor Li", "Grand chancellor Li", "Minister Chen", "Minister Chen", "Minister Chen", "Grand chancellor Li"]
var GCMeet0Text = ["I’m suspicious some evil people have been plotting something dangerous in court. Minister Chen and his allies have been pulling us into a strange direction. I’m afraid we will be out of control soon.", "Meanwhile, you should know it’s not a good sign to let eunuch interfere the politics. I’m worried that you might be taken advantage by some notorious people. There are some ways I can help you if you’re interested.", "We need to have checks and balances with Minister Chen’s people. The Minister of Personnel has run an assessment on the officials in the court. We have found some Chen’s allies were not qualified for their positions.", "I would advise you to fire them to avoid any potential threats.", "What is your thought on this, your majesty?", "I really appreciate your trust in me, your majesty.", "I'll fire those unqualified officials as soon as possible. Don't worry about the vacant positions. I'll bring some brilliant people to fill in."]
var GCMeet1Text = ["I have some news from the Ministry of Justice. Please allow me to present it if you're interested.", "They found some of Minister Chen’s allies might be involved in corruption. Rumor has it that they've been accepting bribes from the arms dealers. That’s why they don’t care about our people’s lives but care too much about the war!", "It aligns with the Confucian ideals and doctrines that the officals should always stay clean and be mindful of the people. I would advise you to arrest those dishonest people to make sure our morality won't be polluted.", "Please let me know what are your thoughts on this.", "I really appreciate your trust in me, your majesty.", "I'll do as you wish and arrest those who threatened our integrity. Don't worry about the vacant positions. I'll bring some brilliant people to fill in."]
var GCMeet2Text = ["To make sure your majesty's safety, I have instructed the Ministry of Justice to continue their investigation of Minister Chen and his allies. And we're deeply concerned with the power behind Minister Chen.", "I think you've been aware that Eunuch Wang colluded with several officials across the palace and brought a strong influence to the politics. To be honest, we don't believe he has a good intention of doing so. Especially, our sources have shown he might be plotting something evil." , "Although we're not sure what that is, once he uses all of his power to attack us, it will bring a huge disaster to the royal family and our nation. It will do all of us good if your majesty start to interrogate Eunuch Wang and Minister Chen.", "Please let me know about your plan, your majesty.", "I really appreciate your trust in me, your majesty.", "I know this is about the destiny of our dynasty. So, I'll ask the Ministry of Justice to look into this issue without delay. We shall put an end to these political machinations."]
var EMeet0Text = ["Thanks for your boundless generosity to see me again. Have you reconsidered about the suggestion I told you last time?", "If we could fill the court openings with Minister Chen's people, he could ask his allies to speak for us. At that time, I don't think you should worry too much that Grand Chancellor Li might override your power.", "How does this sound, your majesty?", "Thanks for trusting me, your majesty.", "I will bring your message to Minister Chen. You should expect to see some differences in court tomorrow."]
var EMeet1Text = ["As you wish, the Eastern Depot has been spying on Grand Chancellor's allies. And we have found something pretty suspicious.", "Based on our reliable sources, Grand Chancellor Li and his allies have a strong connection with the businessmen in the South. That could be the reason why they persuade you to make policies that benefit the southern economy.", "What's worse, we have found evidence that some of Li's allies have accepted bribes from the southern businessmen. I would advise your majesty to punish them severely and dispel them out of court.", "Please inform me of your plan, your majesty?", "Thanks for trusting me, your majesty.", "I will immediately instruct the Eastern Depot to bring the justice to your court. Should you're concerned with the vacant positions caused by this anti-corruption action, I'll bring in some clean and upright people to fill in."]
var EMeet2Text = ["The Eastern Depot continued to investigate the corruption associated with Grand Chancellor Li and his allies. And unfortunately, we found something even more notorious. I don't know if it is appropriate to say.", "Please don't be mad after you hear this, your majesty. We've found a letter saying someone is plotting a rebellion against you! Upon our speculation, we think the mastermind behind all of this is probably Grand Chancellor Li.", "You have rejected some of his proposals. He can't do whatever he wants. He might start to think you're one of his threats! I hope nothing bad will happen at this point. But I would advise you to take action before it's too late.", "Does this sound fair, your majesty?", "Thanks for trusting me, your majesty.", "I will immediately instruct the Eastern Depot to arrest Grand Chancellor Li and get the whole account of the conspiracy. We shall put an end to this traitor of our dynasty."]
var lastNightText = ["My dear son, how have you been as a new ruler of our country? I believe you have demonstrated a strong ability to maintain your power and uphold the justice. You managed to prevent any influencers in the court from exceeding your power. You should be proud of what you have achieved.", "But what truly concerns me is still the war. I had a bad dream last night. I dreamed about your father warning me of the horrible future. I saw lots of fire and terror. My son, I have a feeling that the war will break out pretty soon.", "Is our country well-prepared for fighting against the invasion? Everytime when I think about this question, I would suffer from a severe headache. But I know you're the leader of our country. I believe you have tried all you can to get us prepared.", "We shall see what the future holds for our dynasty. May the odds be with you.", "Please retreat, my son. I shall go to bed soon."]
var ending1Text = ["However, with the solid preparation and constant revenue to support the war, your excellent troops immediately react and vehemently fight back. They make it almost impossible for the intruders to move any farther into your land. Eventually, they have to flee away and pay for the damage they have done.", "After the war, you gain much prestige because of the far-sighted decisions you made for the war preparation. People kneel down before you to praise your wisdom and leadership. They start to believe you can always choose the right decision for this country.", 'From that day on, nobody would ever oppose to what you say. You successfully identify a few disloyal people in court and sweep them out of the palace. You have solidified your power and maintained the position in throne. You proved to the world that you are the most powerful one above all under heaven.', "With the efficiency gained from your unified power, you continue to make contributions for the people in this country and lead your dynasty to a golden era. You have been worshipped by your descendants and memorized as one of the greatest emperors of all time."]
var ending2Text = ["Due to the poor preparation, the valiant Mongolian warriors quickly crumble the border defense. They go all the way down to the inner heart of the country, staring greedily at the wall of the capital city.", "Meanwhile in the palace, people are occupied by terror and chaos. Everybody has shown their true face and only cares about their own interests. Your guards and servants, who seemed loyal to you in the past, all abandon you and flee for their lives.", "Although you make every attempt to bring everything back to order, it just comes in vain when the enemy finally breaks into the palace walls. They rob all they can carry and burn all they can not. The palace collapses down to earth. And the whole city is trapped in fire for a week.", "Some ministers and servants in the palace manage to escape. But nobody knows what has happened to you. Since then, no one has ever seen you again, even nor your body."]
var ending3Text = ["When he was presented with tons of coins from the southern businessmen, he knew the answer to this question was simple. He can't resist accepting brides, especially when he has so much power in his hand.", "However, he knows there is always one person who gets in his way. That person is you. Especially when his dark secrets have been gradually disclosed by you, Li thinks he needs to eliminate you now or never.", "Quickly, he uses his unprecedented power to fill the court with his allies and stop them from speaking against him. Then Li buys off the royal guards and asks them to arrest you.", "Without even realizing what has happened, you have been locked up in a small room. The door of that room will only open at noon to give you a meal. But for the rest of the time, it is securely locked. Since then, you never get a chance to get out and don't know what happens outside."]
var ending4Text = ["He gets more and more involvement in the politics and hopes everything can go as he wishes. However, he finally realizes no matter how hard he tries, there will always be one person beyond him. That is you.", "Wang still remembers how he was brutally punished when he accidentally knocked over your teacup when you were still a kid. He knows he will revenge one day. And this day finally comes.", "Taking advantage of your trust, he places poison in your teacup and easily kills you. With his unprecedented power, everyone knows who murdered the emperor but no one has ever dared to point it out.", "He props up a new puppet emperor to the throne but controls everything behind. The whole government is full of dirty corruptions and evil machinations. People are heavily taxed and live on the edge of starvation. Since then, the dynasty has fallen into the darkness."]


function preload() {
    // Preload images
    homeBG = loadImage("image/homeBG.png");
    storyBG1 = loadImage("image/storyBG1.png");
    storyBG2 = loadImage("image/storyBG2.png");
    storyBG3 = loadImage("image/storyBG3.png");
    palace = loadImage("image/palace.png");
    sun = loadImage("image/sun.png");
    start = loadImage("image/start.png");
    empressRoom = loadImage("image/empressRoom.png");
    frame = loadImage("image/frame.png");
    star1 = loadImage("image/star1.png");
    star2 = loadImage("image/star2.png");
    lanternLeft = loadImage("image/lantern_left.png");
    lanternRight = loadImage("image/lantern_right.png");
    empressLocation = loadImage("image/empressLocation.png");
    empress1 = loadImage("image/empress1.png");
    empress2 = loadImage("image/empress2.png");
    topBarLock = loadImage("image/topBarLock.png");
    GCBubble = loadImage("image/GC bubble.png");
    EBubble = loadImage("image/E bubble.png");
    warBubble = loadImage("image/war bubble.png");
    silk = loadImage("image/silk.png");
    string = loadImage("image/string.png");
    EMonster = loadImage("image/E-monster.png");
    GCMonster = loadImage("image/GC-monster.png");
    court = loadImage("image/court.png");
    courtLocation = loadImage("image/courtLocation.png");
    redParty = loadImage("image/redParty.png");
    redDouble = loadImage("image/redDouble.png");
    blueParty = loadImage("image/blueParty.png");
    blueDouble = loadImage("image/blueDouble.png");
    GC1 = loadImage("image/GC1.png");
    MC1 = loadImage("image/MC1.png");
    GC2 = loadImage("image/GC2.png");
    MC2 = loadImage("image/MC2.png");
    pro = loadImage("image/yes.png");
    con = loadImage("image/no.png");
    solution1 = loadImage("image/solution1.png");
    solution2 = loadImage("image/solution2.png");
    check = loadImage("image/check.png");
    X = loadImage("image/X.png");
    studyRoom = loadImage("image/studyRoom.png");
    studyLocation = loadImage("image/studyLocation.png");
    eunuch1 = loadImage("image/eunuch1.png");
    eunuch2 = loadImage("image/eunuch2.png");
    MCBubble = loadImage("image/MCBubble.png");
    oneDayMore = loadImage("image/oneDayMore.png");
    btmPanel = loadImage("image/btmPanel.png");
    gameOver = loadImage("image/gameOver.png");
    youWon = loadImage("image/youWon.png");
    ending1BG = loadImage("image/ending1BG.png");
    ending2BG = loadImage("image/ending2BG.png");
    ending3BG = loadImage("image/ending3BG.png");
    ending4BG = loadImage("image/ending4BG.png");

    // Preload animations
    arrow = loadAnimation('image/arrow1.png', 'image/arrow2.png', 'image/arrow3.png', 'image/arrow4.png');


}

function setup() {
    gameCanvas = createCanvas(1230, 694);
    gameCanvas.parent("sketchHolder");

    arrow.frameDelay = 32;


}

function draw() {
    if (status === "home") {
        home();
    }
    
    if (status === "bgStory") {
        bgStory();
    }

    if (status === "intro") {
        intro();

    }

    if (status === "day1") {
        if (scene === "Morning Court") {
            day1();
        }

        if (scene === "Royal Study") {
            eunuchIntro();
        }

    }

    if (status === "day2") {
        if (scene === "Morning Court") {
            day2();
        }

        if (scene === "Royal Study") {
            studyMeet();
        }

    }
    
     if (status === "day3") {
        if (scene === "Morning Court") {
            day3();
        }

        if (scene === "Royal Study") {
            studyMeet();
        }

    }
    
      if (status === "day4") {
        if (scene === "Morning Court") {
            day4();
        }

        if (scene === "Royal Study") {
            studyMeet();
        }

    }
    
      if (status === "day5") {
        if (scene === "Morning Court") {
            day5();
        }

        if (scene === "Royal Study") {
            studyMeet();
        }

    }
    
    if (status === "lastNight") {
        lastNight();
    }
    
    if (status === "ending1") {
        ending1();
    }
    
    if (status === "ending2") {
        ending2();
    }
    
    if (status === "ending3") {
        ending3();
    }
    
    if (status === "ending4") {
        ending4();
    }



}

function home() {
    // Render the background and animation
    count = count + 1
    image(homeBG, 0, 0);

    ellipseMode(RADIUS);
    fill(240, 203, 116, sunA);
    strokeWeight(0);
    ellipse(350, 340, sunR, sunR);
    if (swell === true) {
        sunR = sunR + 1 / 8;
        sunA = sunA - 1 / 2;
    }
    if (count === 180) {
        swell = false;
    }
    if (swell === false) {
        sunR = sunR - 1 / 8;
        sunA = sunA + 1 / 2;
    }
    if (count === 360) {
        swell = true
        count = 0;
    }

    image(sun, 180, 170)
    image(palace, 0, 107);

    // Render the button
    if (first === true) {
        startBtn = createImg("image/start.png");
        startBtn.position(515, 530);
        startBtn.parent("sketchHolder");
        startBtn.mouseOver(BtnOver1);
        startBtn.mouseOut(BtnOut1);
        startBtn.mouseClicked(next);
        first = false;
    }


}

function bgStory() {
     count = count + 1


    if (count > 30) {
       
        if (bgOrder === 1) {
        image(storyBG1, -2, -50, 1234, 626);
        } 
            
        if (bgOrder === 2) {
        image(storyBG2, -2, -20, 1234, 648);
        }  
      
        if (bgOrder === 3) {
        image(storyBG3, -2, 0, 1234, 547);
        }
            
        
        
        transitionBG();
        image(btmPanel, 0, 537, 1230);
    }
    
     if (count < 102) {
        transition();
    }
    
 
    
     if (count === 160) {
        proceed.mouseClicked(updateTextBgStory);
    }
    
     if (count >= 150) {
        tint(255, 255);
        animation(arrow, 1140, 585);
        if (count === 150) {
            arrow.visible = true;
        }


    }
    
    if (count === 140) {
        skip = createImg("image/skip.png");
        skip.id("skip");
        skip.parent("sketchHolder");
        skip.position(1090, 15);
        skip.mouseClicked(skipIntro);
    }
    
     if (first === true) {
        sceneName = createDiv("Background Story: Where It Begins");
        sceneName.id("bgName");
        sceneName.parent("sketchHolder");
        sceneName.position(45, 570);

        sceneText = createDiv(bgStoryText[0]);
        sceneText.id("bgText");
        sceneText.parent("sketchHolder");
        sceneText.position(45, 610);

        proceed = createButton('');
        proceed.id('proceed');
        proceed.parent("sketchHolder");
        proceed.position(0, 50);
        

        first = false;
        }  
}

function intro() {

    count = count + 1;
    if (count === 40) {
        empressSound.setVolume(0.2);
        //empressSound.play();
        empressSound.setLoop(true);
        empress = empress1;
    }
    if (count > 30) {
        image(empressRoom, 0, 22, 1030, 522);
        // Change the images of the Empress Dowager
        if (i % 2 == 0) {
            image(empress1, 448, 137);
        } else {
            image(empress2, 448, 137);
        }
        // the animation of the lantern lights
        ellipseMode(RADIUS);
        fill(249, 227, 173, lightA);
        strokeWeight(0);
        ellipse(82, 123, lightR2, lightR2);
        ellipse(940, 123, lightR2, lightR2);
        fill(246, 220, 124);
        ellipse(82, 123, lightR1, lightR1);
        ellipse(940, 123, lightR1, lightR1);
        lightCount = lightCount + 1;
        if (swell === true) {
            lightR1 = lightR1 + 7 / 180;
            lightR2 = lightR2 + 12 / 180;
            lightA = lightA - 120 / 180;
        }
        if (lightCount === 180) {
            swell = false;
        }
        if (swell === false) {
            lightR1 = lightR1 - 7 / 180;
            lightR2 = lightR2 - 12 / 180;
            lightA = lightA + 120 / 180;
        }
        if (lightCount === 360) {
            lightR1 = 50;
            lightR2 = 55;
            swell = true;
            lightCount = 0;
        }

        image(lanternLeft, 40, 40);
        image(lanternRight, 900, 40);


        // the animation of the stars
        starChange = starChange + 1
        if (starChange < 60) {
            image(star1, 330, 82);
        }
        if (starChange === 60 || starChange > 60) {
            image(star2, 300, 72)
        }
        if (starChange === 120) {
            starChange = 0;
        }


        // Frame and parameters
        image(frame, 0, 0, 1230, 694);

        fill("#3f3f3f");
        textFont('Bevan');
        textSize(14);
        text("Preparation towards the war", 45, 20, 140);

        fill("white");
        rect(195, 8, 330, 32, 10);

        fill("#3f3f3f");
        text("Day", 600, 30);

        fill("black");
        textFont("Roboto");
        text(dayNow + "/5", 650, 30);

        tint(255, topBarA1);
        image(topBarLock, 45, 1);
        tint(255, 255);
        fill("#3f3f3f");
        textFont('Bevan');
        textSize(14);
        text("Location", 730, 30);
        fill("black");
        textFont("Roboto");
        text(scene, 820, 30);



        day0();

    }

    if (count > 100 && count < 130) {
        tint(255, locationA);
        image(empressLocation, 330, 260);

        locationA = locationA + 255 / 30;


    }

    if (count >= 130 && count < 245) {
        image(empressLocation, 330, 260);
    }

    if (count >= 245 && count <= 320) {
        tint(255, locationA);
        image(empressLocation, 330, 260);

        locationA = locationA - 255 / 75;
    }

    if (count < 102) {
        transition();
    }

    if (GCIntro === true) {
        bubbleCount = bubbleCount + 1;
        tint(255, 255);
        imageMode(CENTER);
        image(GCBubble, bubbleX1, 200, bubbleR1, bubbleR1);
        if (bubbleCount <= 25) {
            bubbleR1 = bubbleR1 + 15.6;
        }
        if (bubbleCount > 25 && bubbleCount <= 30) {
            bubbleR1 = bubbleR1 - 8;
            bubbleX1 = bubbleX1 - 2;
        }
        if (bubbleCount > 30 && bubbleCount <= 38) {
            bubbleR1 = bubbleR1 - 10;
            bubbleX1 = bubbleX1 - 15;
        }
        if (bubbleCount > 38) {
            bubbleR1 = 270;
        }
    }

    if (EIntro === true) {
        bubbleCount = bubbleCount + 1;
        tint(255, 255);
        imageMode(CENTER);
        image(EBubble, bubbleX2, 200, bubbleR2, bubbleR2);
        if (bubbleCount <= 25) {
            bubbleR2 = bubbleR2 + 15.6;
        }
        if (bubbleCount > 25 && bubbleCount <= 30) {
            bubbleR2 = bubbleR2 - 8;
            bubbleX2 = bubbleX2 + 2;
        }
        if (bubbleCount > 30 && bubbleCount <= 38) {
            bubbleR2 = bubbleR2 - 10;
            bubbleX2 = bubbleX2 + 15;
        }
        if (bubbleCount > 38) {
            bubbleR2 = 270;
        }
    }

    if (strategyIntro === true) {
        bubbleCount = bubbleCount + 1
        tint(255, 255);
        imageMode(CENTER);
        image(EBubble, bubbleX2, 200, bubbleR2, bubbleR2);
        if (bubbleCount <= 25) {
            bubbleR2 = bubbleR2 + 15.6;
        }
        if (bubbleCount > 25 && bubbleCount <= 30) {
            bubbleR2 = bubbleR2 - 8;
            bubbleX2 = bubbleX2 + 2;
        }
        if (bubbleCount > 30 && bubbleCount <= 38) {
            bubbleR2 = bubbleR2 - 10;
            bubbleX2 = bubbleX2 + 15;
        }

        if (bubbleCount > 38) {
            bubbleR2 = 270;
        }
        image(GCBubble, bubbleX1, 200, bubbleR1, bubbleR1);
        if (bubbleCount > 10) {
            if (bubbleCount <= 35) {
                bubbleR1 = bubbleR1 + 15.6;
            }
            if (bubbleCount > 35 && bubbleCount <= 40) {
                bubbleR1 = bubbleR1 - 8;
                bubbleX1 = bubbleX1 - 2;
            }
            if (bubbleCount > 40 && bubbleCount <= 48) {
                bubbleR1 = bubbleR1 - 10;
                bubbleX1 = bubbleX1 - 15;
            }
            if (bubbleCount > 48) {
                bubbleR1 = 270;
            }
        }


    }

    if (i >= 6) {
        // the emperor stays in the middle when stringY equals -135
        // the length of the moving area is 390px
        // the moving speed is 195/60
        // it takes 4 seconds to go from one end to the other


        image(silk, 1032, 13, 190, 666);
        image(GCMonster, 1027, 5);
        image(EMonster, 1027, 533);
        image(string, 1112, stringY);
        textFont("Roboto");
        fill(201, 73, 67);
        textSize(11);
        text("Eunuch is too powerful", 1042, 515, 90, 50);
        text("Grand Chancellor is too powerful", 1042, 160, 90, 50);
        silkCount = silkCount + 1;
        if (silkCount <= 60) {
            fill(255, silkA);
            rect(1027, 5, 200, 684);
            silkA = silkA - 255 / 60;
        }
        if (silkCount >= 60 && silkCount <= 120) {
            stringY = stringY - 195 / 60
        }
        if (silkCount > 120 && silkCount <= 130) {
            stringY = -325
        }
        if (silkCount > 130 && silkCount <= 250) {
            stringY = stringY + 195 / 60
        }
        if (silkCount > 250 && silkCount <= 260) {
            stringY = 65
        }
        if (silkCount > 260 && silkCount <= 350) {
            stringY = stringY - 195 / 60
        }
        if (silkCount > 350) {
            stringY = -227.5
        }



    }

    if (i === 11 || i === 12) {
        bubbleCount = bubbleCount + 1;
        imageMode(CENTER);
        image(warBubble, bubbleX1, 200, bubbleR1, bubbleR1);
        if (bubbleCount <= 25) {
            bubbleR1 = bubbleR1 + 15.6;
        }
        if (bubbleCount > 25 && bubbleCount <= 30) {
            bubbleR1 = bubbleR1 - 8;
            bubbleX1 = bubbleX1 - 2;
        }
        if (bubbleCount > 30 && bubbleCount <= 38) {
            bubbleR1 = bubbleR1 - 10;
            bubbleX1 = bubbleX1 - 15;
        }
        if (bubbleCount > 38) {
            bubbleR1 = 270;
        }
    }

    if (i >= 13) {
        // the length of the progress bar is 330px
        // the filling speed is 5.5

        topBarA1 = 0;
        if (topBarA2 > 0) {
            fill(255, topBarA2);
            rect(35, 0, 655, 45);
            topBarA2 = topBarA2 - 255 / 90;
        } else {
            fill(231, 182, 85);
            rect(195, 8, progress, 32, 10);
            if (progressDemo === true) {
                progress = progress + 5.5;
            }
            if (progress === 330) {
                progressDemo = false;
            }
            if (progressDemo === false && progress !== 0) {
                progress = progress - 5.5
            }

        }

    }


}

function day1() {
    count = count + 1


    if (count > 30) {
        image(court, -5, 5, 1040, 580);

        image(frame, 0, 0, 1230, 694);

        fill("#3f3f3f");
        textFont('Bevan');
        textSize(14);
        text("Preparation towards the war", 45, 20, 140);

        noStroke();
        fill("white");
        rect(195, 8, 330, 32, 10);

        fill(231, 182, 85);
        rect(195, 8, progressFill, 32, 10);

        fill("#3f3f3f");
        text("Day", 600, 30);

        fill("black");
        textFont("Roboto");
        text(dayNow + "/5", 650, 30);

        fill("#3f3f3f");
        textFont('Bevan');
        textSize(14);
        text("Location", 730, 30);
        fill("black");
        textFont("Roboto");
        text(scene, 820, 30);

        image(silk, 1032, 13, 190, 666);
        image(GCMonster, 1027, 5);
        image(EMonster, 1027, 533);
        image(string, 1112, stringY);
        textFont("Roboto");
        fill(201, 73, 67);
        textSize(11);
        text("Eunuch is too powerful", 1042, 515, 90, 50);
        text("Grand Chancellor is too powerful", 1042, 160, 90, 50);


        party();


        if (i < 0) {
            image(GC1, 150, 300, 95, 179);
            image(MC1, 790, 300, 95, 179);
        }


        if (first === true) {
        dialogName = createDiv("Everybody");
        dialogName.id("dialogName");
        dialogName.parent("sketchHolder");
        dialogName.position(45, 570);

        dialogText = createDiv("Long live the emperor!");
        dialogText.id("dialogText");
        dialogText.parent("sketchHolder");
        dialogText.position(45, 610);

            proceed = createButton('');
            proceed.id('proceed');
            proceed.parent("sketchHolder");
            proceed.position(0, 50);

            first = false;

        }
    }

    // "day + 1" animation

    if (count > 100 && count <= 115) {
        imageMode(CENTER);
        tint(255, ODMA);
        image(oneDayMore, 660, 25, ODMR, ODMR);
        ODMA = ODMA + 255 / 15;
        ODMR = ODMR + 40 / 15;
    }

    if (count > 115 && count <= 175) {
        imageMode(CENTER);
        tint(255, 255)
        image(oneDayMore, 660, 25, 40, 40);
    }

    if (count === 175) {
        dayNow = dayNow + 1;
    }

    if (count > 175 && count < 190) {
        imageMode(CENTER);
        tint(255, ODMA);
        image(oneDayMore, 660, 25, ODMR, ODMR);
        ODMA = ODMA - 255 / 15;
        ODMR = ODMR + 40 / 15;
    }

    imageMode(CORNER);

    if (count > 100 && count < 130) {
        tint(255, locationA);
        image(courtLocation, 380, 260);

        locationA = locationA + 255 / 30;


    }

    if (count >= 130 && count < 245) {
        tint(255, 255);
        image(courtLocation, 380, 260);
    }

    if (count >= 245 && count <= 320) {
        tint(255, locationA);
        image(courtLocation, 380, 260);

        locationA = locationA - 255 / 75;
    }

    if (count < 102) {
        transition();
    }
    if (count === 300) {
        proceed.mouseClicked(updateTextDay1);
    }

    if (i >= 0 && i <= 3) {
        GCIn();

    }

    if (i >= 4 && i <= 5) {
        GCtoMC();

    }

    if (i >= 6 && i <= 9) {
        MCtoGC();
        if (i === 8 || i === 9) {
            tint(255, solutionA);
            image(solution1, 445, solutionY, 150, 76);
            if (solutionA < 255) {
                solutionA = solutionA + 255 / 15;
                solutionY = solutionY - 10 / 15;
            }
            tint(255, 255);
            opinion();
        }
    }

    if (i >= 10 && i <= 12) {
        GCtoMC();

        if (i === 11 || i === 12) {
            tint(255, solutionA);
            image(solution2, 445, solutionY, 150, 76);
            if (solutionA < 255) {
                solutionA = solutionA + 255 / 15;
                solutionY = solutionY - 10 / 15;
            }
            tint(255, 255);
            opinion();
        }

    }

    if (i === 13) {
        MCOut();
    }

    if (i === 14) {
        GCIn();
        if (speakerCount > 55) {
            if (pass === true) {
                tint(255, passA);
                image(check, 476, passY);
                if (passA < 255) {
                    passA = passA + 255 / 15;
                    passY = passY - 10 / 15;
                }
                if (speakerCount > 80) {
                    updateMeter();
                }
            }
            if (pass === false) {
                tint(255, passA);
                image(X, 476, passY);
                if (passA < 255) {
                    passA = passA + 255 / 15;
                    passY = passY - 10 / 15;
                }

                updateMeter();

            }
            tint(255, 255);
        }
    }

    if (i >= 15) {

        GCOut();
    }

    if (count >= 300) {
        tint(255, 255);
        animation(arrow, 940, 585);
        if (count === 300) {
            arrow.visible = true;
        }


    }

}

function eunuchIntro() {
    count = count + 1


    if (count > 30) {
        image(studyRoom, 0, 30, 1025, 541);

        if (i % 2 == 0) {
            image(eunuch2, 738, 125, 158, 360);
        } else {
            image(eunuch1, 745, 125, 189, 360);
        }

        image(frame, 0, 0, 1230, 694);

        fill("#3f3f3f");
        textFont('Bevan');
        textSize(14);
        text("Preparation towards the war", 45, 20, 140);

        noStroke();
        fill("white");
        rect(195, 8, 330, 32, 10);

        fill(231, 182, 85);
        rect(195, 8, progressFill, 32, 10);

        fill("#3f3f3f");
        text("Day", 600, 30);

        fill("black");
        textFont("Roboto");
        text(dayNow + "/5", 650, 30);

        fill("#3f3f3f");
        textFont('Bevan');
        textSize(14);
        text("Location", 730, 30);
        fill("black");
        textFont("Roboto");
        text(scene, 820, 30);

        image(silk, 1032, 13, 190, 666);
        image(GCMonster, 1027, 5);
        image(EMonster, 1027, 533);
        image(string, 1112, stringY);
        textFont("Roboto");
        fill(201, 73, 67);
        textSize(11);
        text("Eunuch is too powerful", 1042, 515, 90, 50);
        text("Grand Chancellor is too powerful", 1042, 160, 90, 50);




        if (first === true) {
            dialogName.show();
            dialogName.html("Eunuch Wang");
            dialogText.show();
            dialogText.html("Greetings and fortune to your majesty. I've been waiting for you here.");

            proceed = createButton('');
            proceed.id('proceed');
            proceed.parent("sketchHolder");
            proceed.position(0, 50);

            first = false;

        }
    }

    if (count > 100 && count < 130) {
        tint(255, locationA);
        image(studyLocation, 380, 260);

        locationA = locationA + 255 / 30;


    }

    if (count >= 130 && count < 245) {
        image(studyLocation, 380, 260);
    }

    if (count >= 245 && count <= 320) {
        tint(255, locationA);
        image(studyLocation, 380, 260);

        locationA = locationA - 255 / 75;
    }

    if (count < 102) {
        transition();
    }
    if (count === 300) {
        proceed.mouseClicked(updateTextEunuchIntro);
    }

    if (count >= 300) {
        tint(255, 255);
        animation(arrow, 940, 585);
        if (count === 300) {
            arrow.visible = true;
        }


    }

    if (MCIntro === true) {
        bubbleCount = bubbleCount + 1;
        tint(255, 255);
        imageMode(CENTER);
        image(MCBubble, bubbleX2, 200, bubbleR2, bubbleR2);
        if (bubbleCount <= 25) {
            bubbleR2 = bubbleR2 + 15.6;
        }
        if (bubbleCount > 25 && bubbleCount <= 30) {
            bubbleR2 = bubbleR2 - 8;
            bubbleX2 = bubbleX2 + 2;
        }
        if (bubbleCount > 30 && bubbleCount <= 38) {
            bubbleR2 = bubbleR2 - 10;
            bubbleX2 = bubbleX2 + 15;
        }
        if (bubbleCount > 38) {
            bubbleR2 = 270;
        }

    }

    if (i === 8) {
        updateMeter();
    }
}

function day2() {
    
    courtSetup();
   
    if (count === 300) {
        proceed.mouseClicked(updateTextDay2);
    }

    
    if (i >= 0 && i <= 3) {
        GCIn();
        if (i === 2 || i === 3) {
            tint(255, solutionA);
            image(solution1, 445, solutionY, 150, 76);
            if (solutionA < 255) {
                solutionA = solutionA + 255 / 15;
                solutionY = solutionY - 10 / 15;
            }
            opinion();
        }
    }

    if (i >= 4 && i <= 6) {
        GCtoMC();
        if (i === 5 || i === 6) {
            tint(255, solutionA);
            image(solution2, 445, solutionY, 150, 76);
            if (solutionA < 255) {
                solutionA = solutionA + 255 / 15;
                solutionY = solutionY - 10 / 15;
            }
            opinion();
        }
    }

    if (i === 7) {
        MCOut();
    }

    if (i >= 14 && i <= 15) {
        GCIn();
        if (i === 14) {
            if (speakerCount > 55) {
                if (pass === true) {
                    tint(255, passA);
                    image(check, 476, passY);
                    if (passA < 255) {
                        passA = passA + 255 / 15;
                        passY = passY - 10 / 15;
                    }
                    if (speakerCount > 80) {
                        updateMeter();
                    }
                }
                if (pass === false) {
                    tint(255, passA);
                    image(X, 476, passY);
                    if (passA < 255) {
                        passA = passA + 255 / 15;
                        passY = passY - 10 / 15;
                    }

                    updateMeter();

                }
                tint(255, 255);
            }
        }

    }

    if (i >= 16) {
        GCOut();
    }
    
    if (afterCourtPlan === true) {
        showPlan();
    }


}

function studyMeet() {
    count = count + 1


    if (count > 30) {
        image(studyRoom, 0, 30, 1025, 541);

        if (meeting === "eunuch") {
            if (i % 2 == 0) {
                image(eunuch2, 738, 125, 158, 360);
            } else {
                image(eunuch1, 745, 125, 189, 360);
            }
        }

        if (meeting === "Grand Chancellor") {

            if (i % 2 == 0) {
                image(GC2, 732, 140, 192, 330)

            } else {
                image(GC1, 740, 140, 175, 330);
            }
        }



        image(frame, 0, 0, 1230, 694);

        fill("#3f3f3f");
        textFont('Bevan');
        textSize(14);
        text("Preparation towards the war", 45, 20, 140);

        noStroke();
        fill("white");
        rect(195, 8, 330, 32, 10);

        fill(231, 182, 85);
        rect(195, 8, progressFill, 32, 10);

        fill("#3f3f3f");
        text("Day", 600, 30);

        fill("black");
        textFont("Roboto");
        text(dayNow + "/5", 650, 30);

        fill("#3f3f3f");
        textFont('Bevan');
        textSize(14);
        text("Location", 730, 30);
        fill("black");
        textFont("Roboto");
        text(scene, 820, 30);

        image(silk, 1032, 13, 190, 666);
        image(GCMonster, 1027, 5);
        image(EMonster, 1027, 533);
        image(string, 1112, stringY);
        textFont("Roboto");
        fill(201, 73, 67);
        textSize(11);
        text("Eunuch is too powerful", 1042, 515, 90, 50);
        text("Grand Chancellor is too powerful", 1042, 160, 90, 50);




        if (first === true) {
            dialogName.show();
            dialogText.show();
            if (meeting === "eunuch") {
                dialogName.html("Eunuch Wang");
                if (ERepeat === true) {
                    dialogText.html("Greetings and fortune to your majesty. I've been waiting for you here. Have you reconsidered the suggestion I told you last time? Please allow me to talk about it again in case you forget.");
                } else {
                    dialogText.html("Greetings and fortune to your majesty. I've been waiting for you here.");
                }

            }

            if (meeting === "Grand Chancellor") {
                dialogName.html("Grand Chancellor Li");
                if (GCRepeat === true) {
                    dialogText.html("Thanks for meeting me here, your majesty. Have you reconsidered the suggestion I told you last time? Please permit me to talk about it again in case you forget.");
                } else {
                    dialogText.html("Thanks for meeting me here, your majesty.");
                }


            }


            proceed = createButton('');
            proceed.id('proceed');
            proceed.parent("sketchHolder");
            proceed.position(0, 50);

            first = false;

        }
    }

    if (count > 100 && count < 130) {
        tint(255, locationA);
        image(studyLocation, 380, 260);

        locationA = locationA + 255 / 30;


    }

    if (count >= 130 && count < 245) {
        image(studyLocation, 380, 260);
    }

    if (count >= 245 && count <= 320) {
        tint(255, locationA);
        image(studyLocation, 380, 260);

        locationA = locationA - 255 / 75;
    }

    if (count < 102) {
        transition();
    }
    if (count === 300) {
        if (meeting === "eunuch") {
            if (eunuchMeet === 0) {
                proceed.mouseClicked(updateTextEunuchMeet0);
            }
            if (eunuchMeet === 1) {
                proceed.mouseClicked(updateTextEunuchMeet1);
            }
            if (eunuchMeet === 2) {
                proceed.mouseClicked(updateTextEunuchMeet2);
            }
        }

        if (meeting === "Grand Chancellor") {
            if (GCMeet === 0) {
                proceed.mouseClicked(updateTextGCMeet0);
            }
            if (GCMeet === 1) {
                proceed.mouseClicked(updateTextGCMeet1);
            }
            if (GCMeet === 2) {
                proceed.mouseClicked(updateTextGCMeet2);
            }
        }

    }

    if (count >= 300) {
        tint(255, 255);
        animation(arrow, 940, 585);
        if (count === 300) {
            arrow.visible = true;
        }

    }
    
    if (update === true) {
    
         if (meeting === "eunuch") {
         if (eunuchMeet === 1) {
            if (i === 3) {
                updateMeter();
            }
        }
         if (eunuchMeet === 2 || eunuchMeet === 3) {
            if (i === 4) {
                updateMeter();
            }
        }
    }

    if (meeting === "Grand Chancellor") {
        if (GCMeet === 1) {
            if (i === 5) {
                updateMeter();
            }
        }
        
         if (GCMeet === 2 || GCMeet === 3) {
            if (i === 4) {
                updateMeter();
            }
        }
    }
        
    }

   

}

function day3() {
    courtSetup();
    
    if (count === 300) {
        proceed.mouseClicked(updateTextDay3);
    }

     if (i >= 0 && i <= 3) {
        GCIn();
        if (i === 2 || i === 3) {
            tint(255, solutionA);
            image(solution1, 445, solutionY, 150, 76);
            if (solutionA < 255) {
                solutionA = solutionA + 255 / 15;
                solutionY = solutionY - 10 / 15;
            }
            opinion();
        }
    }

    if (i >= 4 && i <= 6) {
        GCtoMC();
        if (i === 5 || i === 6) {
            tint(255, solutionA);
            image(solution2, 445, solutionY, 150, 76);
            if (solutionA < 255) {
                solutionA = solutionA + 255 / 15;
                solutionY = solutionY - 10 / 15;
            }
            opinion();
        }
    }

    if (i === 7) {
        MCOut();
    }

    if (i >= 14 && i < 15) {
        GCIn();
        if (i === 14) {
            if (speakerCount > 55) {
                if (pass === true) {
                    tint(255, passA);
                    image(check, 476, passY);
                    if (passA < 255) {
                        passA = passA + 255 / 15;
                        passY = passY - 10 / 15;
                    }
                    if (speakerCount > 80) {
                        updateMeter();
                    }
                }
                if (pass === false) {
                    tint(255, passA);
                    image(X, 476, passY);
                    if (passA < 255) {
                        passA = passA + 255 / 15;
                        passY = passY - 10 / 15;
                    }

                    updateMeter();

                }
                tint(255, 255);
            }
        }

    }

    if (i >= 15) {
        GCOut();
    }
 
     if (afterCourtPlan === true) {
        showPlan();
    }
    
}

function day4() {
    courtSetup();
    
    if (count === 300) {
        proceed.mouseClicked(updateTextDay4);
    }

     if (i >= 0 && i <= 3) {
        GCIn();
        if (i === 2 || i === 3) {
            tint(255, solutionA);
            image(solution1, 445, solutionY, 150, 76);
            if (solutionA < 255) {
                solutionA = solutionA + 255 / 15;
                solutionY = solutionY - 10 / 15;
            }
            opinion();
        }
    }

    if (i >= 4 && i <= 6) {
        GCtoMC();
        if (i === 5 || i === 6) {
            tint(255, solutionA);
            image(solution2, 445, solutionY, 150, 76);
            if (solutionA < 255) {
                solutionA = solutionA + 255 / 15;
                solutionY = solutionY - 10 / 15;
            }
            opinion();
        }
    }

    if (i === 7) {
        MCOut();
    }

    if (i >= 14 && i < 15) {
        GCIn();
        if (i === 14) {
            if (speakerCount > 55) {
                if (pass === true) {
                    tint(255, passA);
                    image(check, 476, passY);
                    if (passA < 255) {
                        passA = passA + 255 / 15;
                        passY = passY - 10 / 15;
                    }
                    if (speakerCount > 80) {
                        updateMeter();
                    }
                }
                if (pass === false) {
                    tint(255, passA);
                    image(X, 476, passY);
                    if (passA < 255) {
                        passA = passA + 255 / 15;
                        passY = passY - 10 / 15;
                    }

                    updateMeter();

                }
                tint(255, 255);
            }
        }

    }

    if (i >= 15) {
        GCOut();
    }
    
     if (afterCourtPlan === true) {
        showPlan();
    }
 
}

function day5() {
    courtSetup();
    
    if (count === 300) {
        proceed.mouseClicked(updateTextDay5);
    }

     if (i >= 0 && i <= 3) {
        GCIn();
        if (i === 2 || i === 3) {
            tint(255, solutionA);
            image(solution1, 445, solutionY, 150, 76);
            if (solutionA < 255) {
                solutionA = solutionA + 255 / 15;
                solutionY = solutionY - 10 / 15;
            }
            opinion();
        }
    }

    if (i >= 4 && i <= 6) {
        GCtoMC();
        if (i === 5 || i === 6) {
            tint(255, solutionA);
            image(solution2, 445, solutionY, 150, 76);
            if (solutionA < 255) {
                solutionA = solutionA + 255 / 15;
                solutionY = solutionY - 10 / 15;
            }
            opinion();
        }
    }

    if (i === 7) {
        MCOut();
    }

    if (i >= 14 && i < 15) {
        GCIn();
        if (i === 14) {
            if (speakerCount > 55) {
                if (pass === true) {
                    tint(255, passA);
                    image(check, 476, passY);
                    if (passA < 255) {
                        passA = passA + 255 / 15;
                        passY = passY - 10 / 15;
                    }
                    if (speakerCount > 80) {
                        updateMeter();
                    }
                }
                if (pass === false) {
                    tint(255, passA);
                    image(X, 476, passY);
                    if (passA < 255) {
                        passA = passA + 255 / 15;
                        passY = passY - 10 / 15;
                    }

                    updateMeter();

                }
                tint(255, 255);
            }
        }

    }

    if (i >= 15) {
        GCOut();
    }
 
}

function lastNight() {
  count = count + 1;
 
    if (count > 30) {
        image(empressRoom, 0, 22, 1030, 522);
        // Change the images of the Empress Dowager
        if (i % 2 == 0) {
            image(empress1, 448, 137);
        } else {
            image(empress2, 448, 137);
        }
        // the animation of the lantern lights
        ellipseMode(RADIUS);
        fill(249, 227, 173, lightA);
        strokeWeight(0);
        ellipse(82, 123, lightR2, lightR2);
        ellipse(940, 123, lightR2, lightR2);
        fill(246, 220, 124);
        ellipse(82, 123, lightR1, lightR1);
        ellipse(940, 123, lightR1, lightR1);
        lightCount = lightCount + 1;
        if (swell === true) {
            lightR1 = lightR1 + 7 / 180;
            lightR2 = lightR2 + 12 / 180;
            lightA = lightA - 120 / 180;
        }
        if (lightCount === 180) {
            swell = false;
        }
        if (swell === false) {
            lightR1 = lightR1 - 7 / 180;
            lightR2 = lightR2 - 12 / 180;
            lightA = lightA + 120 / 180;
        }
        if (lightCount === 360) {
            lightR1 = 50;
            lightR2 = 55;
            swell = true;
            lightCount = 0;
        }

        image(lanternLeft, 40, 40);
        image(lanternRight, 900, 40);


        // the animation of the stars
        starChange = starChange + 1
        if (starChange < 60) {
            image(star1, 330, 82);
        }
        if (starChange === 60 || starChange > 60) {
            image(star2, 300, 72)
        }
        if (starChange === 120) {
            starChange = 0;
        }


        // Frame and parameters
        image(frame, 0, 0, 1230, 694);

        fill("#3f3f3f");
        textFont('Bevan');
        textSize(14);
        text("Preparation towards the war", 45, 20, 140);

        noStroke();
        fill("white");
        rect(195, 8, 330, 32, 10);

        fill(231, 182, 85);
        rect(195, 8, progressFill, 32, 10);

        fill("#3f3f3f");
        text("Day", 600, 30);

        fill("black");
        textFont("Roboto");
        text(dayNow + "/5", 650, 30);

        fill("#3f3f3f");
        textFont('Bevan');
        textSize(14);
        text("Location", 730, 30);
        fill("black");
        textFont("Roboto");
        text(scene, 820, 30);

        image(silk, 1032, 13, 190, 666);
        image(GCMonster, 1027, 5);
        image(EMonster, 1027, 533);
        image(string, 1112, stringY);
        textFont("Roboto");
        fill(201, 73, 67);
        textSize(11);
        text("Eunuch is too powerful", 1042, 515, 90, 50);
        text("Grand Chancellor is too powerful", 1042, 160, 90, 50);



    }
    
       if (first === true) {
            dialogName.show();
            dialogName.html("Empress Dowager");
            dialogText.show();
            dialogText.html(lastNightText[0]);

            proceed = createButton('');
            proceed.id('proceed');
            proceed.parent("sketchHolder");
            proceed.position(0, 50);

            first = false;

        }

    if (count > 100 && count < 130) {
        tint(255, locationA);
        image(empressLocation, 330, 260);

        locationA = locationA + 255 / 30;

    }

    if (count >= 130 && count < 245) {
        image(empressLocation, 330, 260);
    }

    if (count >= 245 && count <= 320) {
        tint(255, locationA);
        image(empressLocation, 330, 260);

        locationA = locationA - 255 / 75;
    }

    if (count < 102) {
        transition();
    }  
    
     if (count === 300) {
        proceed.mouseClicked(updateTextLastNight);
    }
    
     if (count >= 300) {
        tint(255, 255);
        animation(arrow, 940, 585);
        if (count === 300) {
            arrow.visible = true;
        }


    }
    
}

function ending1() {
     count = count + 1


    if (count > 30) {
        image(ending1BG, -2, -110, 1234, 719);

        image(btmPanel, 0, 537, 1230);
    }
    
     if (count < 102) {
        transition();
    }
    
     if (count > 100 && count < 130) {
        tint(255, locationA);
        image(youWon, 463, 235);

        locationA = locationA + 255 / 30;

    }

    if (count >= 130 && count < 245) {
        image(youWon, 463, 235);
    }

    if (count >= 245 && count <= 320) {
        tint(255, locationA);
        image(youWon, 463, 235);

        locationA = locationA - 255 / 75;
    }
    
     if (count === 300) {
        proceed.mouseClicked(updateTextEnding1);
    }
    
     if (count >= 300) {
        tint(255, 255);
        animation(arrow, 1140, 585);
        if (count === 300) {
            arrow.visible = true;
        }


    }
    
     if (first === true) {
        sceneName = createDiv("Ending: Above All under Heaven");
        sceneName.id("sceneName");
        sceneName.parent("sketchHolder");
        sceneName.position(45, 570);

        sceneText = createDiv("It turns out the ominous dream of your mother isn't a false alarm. The war suddenly breaks out right after that night. The Mongolian army fiercely attacks the northern border, aimed to march inside.");
        sceneText.id("sceneText");
        sceneText.parent("sketchHolder");
        sceneText.position(45, 610);

        proceed = createButton('');
        proceed.id('proceed');
        proceed.parent("sketchHolder");
        proceed.position(0, 50);

        first = false;
        }
    
    
}

function ending2() {
     count = count + 1


    if (count > 30) {
        image(ending2BG, -2, -55, 1234, 705);

        image(btmPanel, 0, 537, 1230);
    }
    
     if (count < 102) {
        transition();
    }
    
     if (count > 100 && count < 130) {
        tint(255, locationA);
        image(gameOver, 463, 235);

        locationA = locationA + 255 / 30;

    }

    if (count >= 130 && count < 245) {
        image(gameOver, 463, 235);
    }

    if (count >= 245 && count <= 320) {
        tint(255, locationA);
        image(gameOver, 463, 235);

        locationA = locationA - 255 / 75;
    }
    
     if (count === 300) {
        proceed.mouseClicked(updateTextEnding2);
    }
    
     if (count >= 300) {
        tint(255, 255);
        animation(arrow, 1140, 585);
        if (count === 300) {
            arrow.visible = true;
        }


    }
    
     if (first === true) {
        sceneName = createDiv("Ending: Collapsed in Fire");
        sceneName.id("sceneName");
        sceneName.parent("sketchHolder");
        sceneName.position(45, 570);

        sceneText = createDiv("While officials in court are still unable to reach an agreement, the Mongolians know this is the best time to invade. The war suddenly breaks out right after the night when you met your mother.");
        sceneText.id("sceneText");
        sceneText.parent("sketchHolder");
        sceneText.position(45, 610);

        proceed = createButton('');
        proceed.id('proceed');
        proceed.parent("sketchHolder");
        proceed.position(0, 50);

        first = false;
        }
    
    
}

function ending3() {
     count = count + 1


    if (count > 30) {
        image(ending3BG, -12, 0, 1242, 620);

        image(btmPanel, 0, 537, 1230);
    }
    
     if (count < 102) {
        transition();
    }
    
     if (count > 100 && count < 130) {
        tint(255, locationA);
        image(gameOver, 463, 235);

        locationA = locationA + 255 / 30;

    }

    if (count >= 130 && count < 245) {
        image(gameOver, 463, 235);
    }

    if (count >= 245 && count <= 320) {
        tint(255, locationA);
        image(gameOver, 463, 235);

        locationA = locationA - 255 / 75;
    }
    
     if (count === 300) {
        proceed.mouseClicked(updateTextEnding3);
    }
    
     if (count >= 300) {
        tint(255, 255);
        animation(arrow, 1140, 585);
        if (count === 300) {
            arrow.visible = true;
        }


    }
    
     if (first === true) {
        sceneName = createDiv("Ending: Locked up by Grand Chancellor");
        sceneName.id("sceneName");
        sceneName.parent("sketchHolder");
        sceneName.position(45, 570);

        sceneText = createDiv("Years ago, Grand Chancellor Li was confused with a question: Should he strictly follow the confucianism ethics and be loyal to his monarch under any circumstances? Or should he just exploit his position to seek personal gain?");
        sceneText.id("sceneText");
        sceneText.parent("sketchHolder");
        sceneText.position(45, 610);

        proceed = createButton('');
        proceed.id('proceed');
        proceed.parent("sketchHolder");
        proceed.position(0, 50);
        i = -1;

        first = false;
        }    
}

function ending4() {
     count = count + 1


    if (count > 30) {
        image(ending4BG, -2, 0, 1234, 589);

        image(btmPanel, 0, 537, 1230);
    }
    
     if (count < 102) {
        transition();
    }
    
     if (count > 100 && count < 130) {
        tint(255, locationA);
        image(gameOver, 463, 235);

        locationA = locationA + 255 / 30;

    }

    if (count >= 130 && count < 245) {
        image(gameOver, 463, 235);
    }

    if (count >= 245 && count <= 320) {
        tint(255, locationA);
        image(gameOver, 463, 235);

        locationA = locationA - 255 / 75;
    }
    
     if (count === 300) {
        proceed.mouseClicked(updateTextEnding4);
    }
    
     if (count >= 300) {
        tint(255, 255);
        animation(arrow, 1140, 585);
        if (count === 300) {
            arrow.visible = true;
        }


    }
    
     if (first === true) {
        sceneName = createDiv("Ending: Murdered by Eunuch");
        sceneName.id("sceneName");
        sceneName.parent("sketchHolder");
        sceneName.position(45, 570);

        sceneText = createDiv("With so much power in his hand, Eunuch Wang is not satisfied with the previous role as a lowly servant. He wants to eliminate Grand Chancellor Li forever and replace the whole court with his allies.");
        sceneText.id("sceneText");
        sceneText.parent("sketchHolder");
        sceneText.position(45, 610);

        proceed = createButton('');
        proceed.id('proceed');
        proceed.parent("sketchHolder");
        proceed.position(0, 50);
        i = -1;

        first = false;
        }    
}

function BtnOver1() {
    startBtn.style("opacity", "0.5");    
    
    
    document.body.style.cursor = "pointer";
}

function BtnOut1() {

    startBtn.style("opacity", "1");    
  
    document.body.style.cursor = "default";
}

function next() {
    if (power > 0 && power < 100) {
        
   
        
        if (status === "lastNight") {
        nextBtn.remove();
        mask.remove();
        count = 0;
        first = true;
        allWhite = false;
        dialogText.remove();
        dialogName.remove();
        proceed.remove();
        i = -1;
        locationA = 0;
            
        if (progress === 330) {
        status = "ending1";
        } else {
        status = "ending2";
        }
            
        }
    
        if (status === "day5") {
        update = false;
        status = "lastNight";
        nextBtn.hide();
        mask.hide();
        count = 0;
        first = true;
        allWhite = false;
        dialogText.hide();
        dialogName.hide();
        scene = "Empress Dowager's Room";
        locationA = 0;
        ODMA = 0;
        ODMR = 0;
        proceed.remove();
        i = 0;
        solutionY = 265;
        solutionA = 0;
        passY = 235;
        passA = 0;
        j = 0;
    }
    
        if (status === "day4") {
        meetGCBtn.remove();
        meetEBtn.remove();
        update = false;
        status = "day5";
        nextBtn.hide();
        mask.hide();
        count = 0;
        first = true;
        allWhite = false;
        dialogText.hide();
        dialogName.hide();
        scene = "Morning Court";
        locationA = 0;
        ODMA = 0;
        ODMR = 0;
        proceed.remove();
        i = -1;
        solutionY = 265;
        solutionA = 0;
        passY = 235;
        passA = 0;
        j = 0;
    }
    
    if (status === "day3") {
        meetGCBtn.remove();
        meetEBtn.remove();
        update = false;
        status = "day4";
        nextBtn.hide();
        mask.hide();
        count = 0;
        first = true;
        allWhite = false;
        dialogText.hide();
        dialogName.hide();
        scene = "Morning Court";
        locationA = 0;
        ODMA = 0;
        ODMR = 0;
        proceed.remove();
        i = -1;
        solutionY = 265;
        solutionA = 0;
        passY = 235;
        passA = 0;
        j = 0;
        planCount = 0;
    }
    
    if (status === "day2") {
        meetGCBtn.remove();
        meetEBtn.remove();
        update = false;
        status = "day3";
        nextBtn.hide();
        mask.hide();
        count = 0;
        first = true;
        allWhite = false;
        dialogText.hide();
        dialogName.hide();
        scene = "Morning Court";
        locationA = 0;
        ODMA = 0;
        ODMR = 0;
        proceed.remove();
        i = -1;
        solutionY = 265;
        solutionA = 0;
        passY = 235;
        passA = 0;
        j = 0;
        planCount = 0;
    }


    if (status === "day1" && scene === "Royal Study") {
        status = "day2";
        nextBtn.hide();
        mask.hide();
        count = 0;
        first = true;
        allWhite = false;
        dialogText.hide();
        dialogName.hide();
        scene = "Morning Court";
        locationA = 0;
        ODMA = 0;
        ODMR = 0;
        proceed.remove();
        i = -1;
        solutionY = 265;
        solutionA = 0;
        passY = 235;
        passA = 0;
        j = 0;
        update = false;
    }

        if (status === "day1" && scene === "Morning Court") {
            nextBtn.hide();
            mask.hide();
            count = 0;
            first = true;
            allWhite = false;
            dialogText.hide();
            dialogName.hide();
            scene = "Royal Study";
            locationA = 0;
            proceed.remove();
            i = -1;
            j = 0;
        }



    if (status === "intro") {
        status = "day1";
        nextBtn.remove();
        mask.remove();
        count = 0;
        first = true;
        allWhite = false;
        dialogText.remove();
        dialogName.remove();
        scene = "Morning Court";
        locationA = 0;
        proceed.remove();
        i = -1;
        stringY = -227.5;
        progress = 0;
    }

    if (status === "home") {
        status = "bgStory";
        startBtn.remove();
        document.body.style.cursor = "default";
        count = 0;
        swell = true;
        first = true;
    }

 } else {
     
    count = 0;
    first = true;
    allWhite = false;
    dialogText.remove();
    dialogName.remove();
    proceed.remove();
    mask.remove();
    nextBtn.remove();
    locationA = 0;
     
     if (power <= 0) {
    status = "ending4";
    }
     
    if (power >= 100) {
    status = "ending3";
    }
     
 }

}

function transition() {
    fill(255, rectA);
    rect(0, 0, 1230, 694);
    if (allWhite === false) {
        rectA = rectA + 255 / 30;
    }
    if (count === 30) {
        rectA = 255
    }
    if (count === 40) {
        allWhite = true
    }
    if (allWhite === true) {
        rectA = rectA - 255 / 60;
    }
}

function transitionBG() {
    if (bgChangeRect === true) {
        
    bgRectCount = bgRectCount + 1; 
    fill(255, bgRectA);
    rect(0, 0, 1230, 542);
    if (bgRectCount < 24) {
    bgRectA = bgRectA + 255/24
    } 
    if (bgRectCount === 24) {
    bgRectA = 255
    bgOrder = bgOrder + 1;
    }
    if (bgRectCount > 24 && bgRectCount < 48) {
     bgRectA = bgRectA - 255/24    
    }
    if (bgRectCount === 48) {
    bgRectA = 0;
    bgRectCount = 0;
    bgChangeRect = false;
    }
    }
    
}

function day0() {
    if (first === true) {
        dialogName = createDiv("Empress Dowager");
        dialogName.id("dialogName");
        dialogName.parent("sketchHolder");
        dialogName.position(45, 570);

        dialogText = createDiv("My dear son, tomorrow is your big day. I’m overjoyed that this auspicious day has finally come. You'll hold court for the very first time. I believe you can be a great emperor and lead our country to the brightest future.");
        dialogText.id("dialogText");
        dialogText.parent("sketchHolder");
        dialogText.position(45, 610);

        proceed = createButton('');
        proceed.id('proceed');
        proceed.parent("sketchHolder");
        proceed.position(0, 50);



        first = false;
    }

    if (count === 300) {
        proceed.mouseClicked(updateTextIntro);
    }

    if (count > 300) {
        animation(arrow, 940, 585);

    }

}

function updateTextBgStory() {
i = i + 1;
sceneText.html(bgStoryText[i]);
    
if (i === 4) {
bgChangeRect = true;
}
    
if (i === 7) {
bgChangeRect = true;
}

if (i === 10) {
    
status = "intro";
count = 0; 
first = true;
allWhite = false;
i = 0;
skip.remove();
sceneName.remove();
sceneText.remove();
proceed.remove();
    }
        
}

function updateTextIntro() {
    if (GCIntro === true) {


        if (i === 2) {
            introGeneral = true;
            GCIntro = false;
            i = 3;
            bubbleX1 = 840;
            bubbleR1 = 1;
            bubbleCount = 0;


        } else {
            dialogText.html(GCIntroText[i]);
            i = i + 1;

        }
    }

    if (EIntro === true) {
        if (i === 3) {
            introGeneral = true;
            EIntro = false;
            i = 3;
            bubbleX2 = 195;
            bubbleR2 = 1;
            bubbleCount = 0;


        } else {
            dialogText.html(EIntroText[i]);
            i = i + 1;

        }


    }

    if (strategyIntro === true) {
        if (i === 2) {
            introGeneral = true;
            strategyIntro = false;
            i = 3;
            bubbleX1 = 840;
            bubbleR1 = 1;
            bubbleX2 = 195;
            bubbleR2 = 1;
            bubbleCount = 0;

        } else {
            dialogText.html(strategyIntroText[i]);
            i = i + 1;

        }

    }

    if (introGeneral === true) {


        if (i < 4) {
            dialogText.html(introText[i]);
            i = i + 1;
        }

        if (i === 4) {

            proceed.attribute('disabled', 'disabled');
            proceed.style("cursor", "default");
            mask = createDiv("");
            mask.id("mask");
            mask.parent("sketchHolder");
            mask.position(0, 49);
            arrow.visible = false;

            choiceBtn1 = createDiv("Who is the Grand Chancellor?");
            choiceBtn1.class('choice');
            choiceBtn1.parent("sketchHolder");
            choiceBtn1.position(260, 150);
            choiceBtn1.mouseClicked(Btn1);

            choiceBtn2 = createDiv("Who is the Eunuch?");
            choiceBtn2.class('choice');
            choiceBtn2.parent("sketchHolder");
            choiceBtn2.position(260, 230);
            choiceBtn2.mouseClicked(Btn2);

            choiceBtn3 = createDiv("What strategy should I have?");
            choiceBtn3.class('choice');
            choiceBtn3.parent("sketchHolder");
            choiceBtn3.position(260, 310);
            choiceBtn3.mouseClicked(Btn3);

            choiceBtn4 = createDiv("I think I already know what I need. I’m ready!");
            choiceBtn4.class('choice');
            choiceBtn4.parent("sketchHolder");
            choiceBtn4.position(260, 390);
            choiceBtn4.mouseClicked(Btn4);
        }


        if (i === 14) {
            dialogText.html(introText[i]);
            proceed.attribute('disabled', 'disabled');
            proceed.style("cursor", "default");
            mask.show()
            nextBtn = createDiv("END THIS DAY");
            nextBtn.class("choice");
            nextBtn.parent("sketchHolder");
            nextBtn.position(260, 260);
            nextBtn.mouseClicked(next);
            arrow.visible = false;
        }

        if (i >= 5 && i < 14) {
            dialogText.html(introText[i]);
            i = i + 1;
        }

    }






}

function updateTextDay1() {
    i = i + 1;
    dialogText.html(day1Text[i]);
    dialogName.html(day1Name[i]);
    if (i === 4 || i === 6 || i === 10 || i === 13) {
        speakerCount = 0;
    }
    if (i === 8) {
        opNow = true;
        solution = "GC";
    }
    if (i === 10) {
        removeOp();
    }
    if (i === 11) {
        solutionY = 265,
            solutionA = 0;
        opNow = true;
        solution = "MC";
    }

    if (i === 13) {
        opNow = false;
        removeOp();
        mask = createDiv("");
        mask.id("mask");
        mask.parent("sketchHolder");
        mask.position(0, 49);
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        
        choiceBtn1 = createDiv("Cut your own recreational expenses");
        choiceBtn1.class('choice');
        choiceBtn1.parent("sketchHolder");
        choiceBtn1.mouseClicked(Btn1);

            choiceBtn2 = createDiv("Impose more taxes on the businessmen in the south");
            choiceBtn2.class('choice');
            choiceBtn2.parent("sketchHolder");
            choiceBtn2.mouseClicked(Btn2);
        
       
        choiceBtn1.position(280, 200);
        choiceBtn2.position(280, 300);
        choiceBtn1.mouseOver(Btn1Over);
        choiceBtn1.mouseOut(BtnOut);
        choiceBtn1.mouseClicked(GCBtn);
        choiceBtn2.mouseOver(Btn2Over);
        choiceBtn2.mouseOut(BtnOut);
        choiceBtn2.mouseClicked(MCBtn);
        GCHead = createImg("image/GCHead.png");
        MCHead = createImg("image/MCHead.png");
        GCHead.class("head");
        GCHead.parent("sketchHolder");
        GCHead.position(247, 182);
        MCHead.class("head");
        MCHead.parent("sketchHolder");
        MCHead.position(247, 282);

    }

    if (i === 15) {
        speakerCount = 0;
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        nextBtn = createDiv("Dismiss the court");
            nextBtn.class("choice");
            nextBtn.parent("sketchHolder");
            nextBtn.position(260, 260);
            nextBtn.mouseClicked(next);
        dialogName.html("Eunuch");
        dialogText.html("If there is nothing else to discuss, we shall dismiss the court.");
    }

}

function updateTextEunuchIntro() {
    if (studyEnd === true) {
        i = i + 1;
        dialogText.html("Please permit me to leave, your majesty.");
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        nextBtn.show();
        nextBtn.html("END THIS DAY");
    } else {
        i = i + 1;
        dialogText.html(eunuchIntroText[i]);

        if (i === 7) {
            MCIntro = false;
            mask.show();
            arrow.visible = false;
            proceed.attribute('disabled', 'disabled');
            proceed.style("cursor", "default");
            proceed.hide();
            choiceBtn3 = createDiv("Fill the open positions with Minister Chen's allies");
            choiceBtn3.class('choice');
            choiceBtn3.parent("sketchHolder");
            choiceBtn3.position(260, 200);
            choiceBtn3.mouseClicked(Btn3);
            choiceBtn3.mouseOver(Btn3Over);
            choiceBtn3.mouseOut(BtnOut);

            choiceBtn4 = createDiv("I'm not interested");
            choiceBtn4.class('choice');
            choiceBtn4.parent("sketchHolder");
            choiceBtn4.mouseClicked(Btn4);
            choiceBtn4.position(260, 300);
        }

        if (i === 5) {
            bubbleCount = 0,
                bubbleX2 = 500,
                bubbleR2 = 1,
                MCIntro = true;
        }

        if (i === 9) {
            studyEnd = true;
        }

    }

}

function updateTextDay2() {
    i = i + 1;
    dialogText.html(day2Text[i]);
    dialogName.html(day2Name[i]);

    if (i === 0 || i === 4 || i === 7 || i === 8) {
        speakerCount = 0;
    }

    if (i === 2) {
        opNow = true;
        solution = "GC";
    }

    if (i === 4) {
        removeOp();
    }

    if (i === 5) {
        solutionY = 265,
            solutionA = 0;
        opNow = true;
        solution = "MC";
    }

    if (i === 7) {
        opNow = false;
        removeOp();
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        choiceBtn1.show();
        choiceBtn2.show();
        choiceBtn1.html("Spend money on the canal");
        choiceBtn2.html("Spend money on the weapons and armor");
        choiceBtn1.position(280, 200);
        choiceBtn2.position(280, 300);
        GCHead.show();
        MCHead.show();
    }

    if (i === 15) {
        dialogName.html("Grand Chancellor Li");
        dialogText.html("Your majesty, I have some concerns about how things are going in the court. I think it would be better if we can have some further conversations. If you want to hold an additional meeting with me after court, I would be willing to meet you in your study.");
    }

    if (i === 16) {
        speakerCount = 0;
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        dismissBtn = createDiv("Dismiss the court");
        dismissBtn.class("choice");
        dismissBtn.parent("sketchHolder");
        dismissBtn.position(260, 260);
        dismissBtn.mouseClicked(dismiss);
        dialogName.html("Eunuch");
        dialogText.html("If there is nothing else to discuss, we shall dismiss the court.");
    }
}

function updateTextDay3() {
    i = i + 1;
    dialogText.html(day3Text[i]);
    dialogName.html(day3Name[i]);

    if (i === 0 || i === 4 || i === 7 || i === 8) {
        speakerCount = 0;
    }

    if (i === 2) {
        opNow = true;
        solution = "GC";
    }

    if (i === 4) {
        removeOp();
    }

    if (i === 5) {
        solutionY = 265,
        solutionA = 0;
        opNow = true;
        solution = "MC";
    }

    if (i === 7) {
        opNow = false;
        removeOp();
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        choiceBtn1.show();
        choiceBtn2.show();
        choiceBtn1.html("Send the workers to build the infrastructure in the South");
        choiceBtn2.html("Send the workers to build the defense at the border");
        choiceBtn1.position(280, 200);
        choiceBtn2.position(280, 300);
        GCHead.show();
        MCHead.show();
    }


    if (i === 15) {
        speakerCount = 0;
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        dismissBtn = createDiv("Dismiss the court");
        dismissBtn.class("choice");
        dismissBtn.parent("sketchHolder");
        dismissBtn.position(260, 260);
        dismissBtn.mouseClicked(dismiss);
        dialogName.html("Eunuch");
        dialogText.html("If there is nothing else to discuss, we shall dismiss the court.");
    }
}

function updateTextDay4() {
    i = i + 1;
    dialogText.html(day4Text[i]);
    dialogName.html(day4Name[i]);

    if (i === 0 || i === 4 || i === 7 || i === 8) {
        speakerCount = 0;
    }

    if (i === 2) {
        opNow = true;
        solution = "GC";
    }

    if (i === 4) {
        removeOp();
    }

    if (i === 5) {
        solutionY = 265,
        solutionA = 0;
        opNow = true;
        solution = "MC";
    }

    if (i === 7) {
        opNow = false;
        removeOp();
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        choiceBtn1.show();
        choiceBtn2.show();
        choiceBtn1.html("Import horses from Korea");
        choiceBtn2.html("Import ginseng and diamonds from Korea");
        choiceBtn1.position(280, 200);
        choiceBtn2.position(280, 300);
        GCHead.show();
        MCHead.show();
    }


    if (i === 15) {
        speakerCount = 0;
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        dismissBtn = createDiv("Dismiss the court");
        dismissBtn.class("choice");
        dismissBtn.parent("sketchHolder");
        dismissBtn.position(260, 260);
        dismissBtn.mouseClicked(dismiss);
        dialogName.html("Eunuch");
        dialogText.html("If there is nothing else to discuss, we shall dismiss the court.");
    }
}

function updateTextDay5() {
    i = i + 1;
    dialogText.html(day5Text[i]);
    dialogName.html(day5Name[i]);

    if (i === 0 || i === 4 || i === 7 || i === 8) {
        speakerCount = 0;
    }

    if (i === 2) {
        opNow = true;
        solution = "GC";
    }

    if (i === 4) {
        removeOp();
    }

    if (i === 5) {
        solutionY = 265,
        solutionA = 0;
        opNow = true;
        solution = "MC";
    }

    if (i === 7) {
        opNow = false;
        removeOp();
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        choiceBtn1.show();
        choiceBtn2.show();
        choiceBtn1.html("Ask General Yang to lead the army");
        choiceBtn2.html("Ask Eunuch Wang to lead the army");
        choiceBtn1.position(280, 200);
        choiceBtn2.position(280, 300);
        GCHead.show();
        MCHead.show();
    }


    if (i === 15) {
        speakerCount = 0;
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        nextBtn.html("Dismiss the court");
        nextBtn.show();
        nextBtn.position(260, 260);
        dialogName.html("Eunuch");
        dialogText.html("If there is nothing else to discuss, we shall dismiss the court.");
    }
}

function updateTextGCMeet0() {
    if (studyEnd === true) {
        i = i + 1;
        dialogText.html("It's my pleasure to serve you, your majesty. Please permit me to leave.");
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        nextBtn.position(260, 260);
        nextBtn.show();
        nextBtn.html("END THIS DAY");

    } else {

        i = i + 1;
        dialogText.html(GCMeet0Text[i]);

        if (i === 4) {
            mask.show();
            arrow.visible = false;
            proceed.attribute('disabled', 'disabled');
            proceed.style("cursor", "default");
            proceed.hide();
            choiceBtn3.show();
            choiceBtn3.html("Fire the unqualified officials");
            choiceBtn3.position(250, 200);
            choiceBtn4.show();
            choiceBtn4.html("I'm not interested");
            choiceBtn4.position(250, 300);
        }

        if (i === 6) {
            studyEnd = true;
        }

    }
}

function updateTextGCMeet1() {
    if (studyEnd === true) {
        i = i + 1;
        dialogText.html("It's my pleasure to serve you, your majesty. Please permit me to leave.");
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        nextBtn.position(260, 260);
        nextBtn.show();
        nextBtn.html("END THIS DAY");

    } else {

        i = i + 1;
        dialogText.html(GCMeet1Text[i]);

        if (i === 3) {
            mask.show();
            arrow.visible = false;
            proceed.attribute('disabled', 'disabled');
            proceed.style("cursor", "default");
            proceed.hide();
            choiceBtn3.show();
            choiceBtn3.html("Fire the dishonest officials");
            choiceBtn3.position(250, 200);
            choiceBtn4.show();
            choiceBtn4.html("I'm not interested");
            choiceBtn4.position(250, 300);
        }

        if (i === 5) {
            studyEnd = true;
        }

    }
}

function updateTextGCMeet2() {
    if (studyEnd === true) {
        i = i + 1;
        dialogText.html("It's my pleasure to serve you, your majesty. Please permit me to leave.");
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        nextBtn.position(260, 260);
        nextBtn.show();
        nextBtn.html("END THIS DAY");

    } else {

        i = i + 1;
        dialogText.html(GCMeet2Text[i]);

        if (i === 3) {
            mask.show();
            arrow.visible = false;
            proceed.attribute('disabled', 'disabled');
            proceed.style("cursor", "default");
            proceed.hide();
            choiceBtn3.show();
            choiceBtn3.html("Interrogate Eunuch Wang and Minister Chen");
            choiceBtn3.position(250, 200);
            choiceBtn4.show();
            choiceBtn4.html("I don't think you have solid evidence to win my trust");
            choiceBtn4.position(250, 300);
        }

        if (i === 5) {
            studyEnd = true;
        }

    }
}

function updateTextEunuchMeet0() {
    if (studyEnd === true) {
        i = i + 1;
        dialogText.html("Please permit me to leave, your majesty.");
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        nextBtn.position(260, 260);
        nextBtn.show();
        nextBtn.html("END THIS DAY");

    } else {
    
    i = i + 1;
    dialogText.html(EMeet0Text[i]);

    if (i === 2) {
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        choiceBtn3.show();
        choiceBtn3.html("Fill the open positions with Minister Chen's allies");
        choiceBtn3.position(250, 200);
        choiceBtn4.show();
        choiceBtn4.html("I'm not interested");
        choiceBtn4.position(250, 300);
    }
        
        if (i === 4) {
           studyEnd = true; 
        }
        
    }
}

function updateTextEunuchMeet1() {
    if (studyEnd === true) {
        i = i + 1;
        dialogText.html("Please permit me to leave, your majesty.");
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        nextBtn.position(260, 260);
        nextBtn.show();
        nextBtn.html("END THIS DAY");

    } else {
    
    i = i + 1;
    dialogText.html(EMeet1Text[i]);

    if (i === 3) {
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        choiceBtn3.show();
        choiceBtn3.html("Arrest the corrupt officials");
        choiceBtn3.position(250, 200);
        choiceBtn4.show();
        choiceBtn4.html("I'm not interested");
        choiceBtn4.position(250, 300);
    }
        
        if (i === 5) {
           studyEnd = true; 
        }
        
    }
}

function updateTextEunuchMeet2() {
    if (studyEnd === true) {
        i = i + 1;
        dialogText.html("Please permit me to leave, your majesty.");
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        nextBtn.position(260, 260);
        nextBtn.show();
        nextBtn.html("END THIS DAY");

    } else {
    
    i = i + 1;
    dialogText.html(EMeet2Text[i]);

    if (i === 3) {
        mask.show();
        arrow.visible = false;
        proceed.attribute('disabled', 'disabled');
        proceed.style("cursor", "default");
        proceed.hide();
        choiceBtn3.show();
        choiceBtn3.html("Arrest Grand Chancellor Li");
        choiceBtn3.position(250, 200);
        choiceBtn4.show();
        choiceBtn4.html("I don't think you have solid evidence to win my trust");
        choiceBtn4.position(250, 300);
    }
        
        if (i === 5) {
           studyEnd = true; 
        }
        
    }
}

function updateTextLastNight() {
    
i = i + 1;
dialogText.html(lastNightText[i]);
    
 if (i === 4) {
            proceed.attribute('disabled', 'disabled');
            proceed.style("cursor", "default");
            proceed.hide();
            mask.show()
            nextBtn.show();
            nextBtn.position(260, 260);
            nextBtn.html("END THIS DAY");
            arrow.visible = false;
        }
    
}

function updateTextEnding1() {
i = i + 1;
sceneText.html(ending1Text[i]);

    
 if (i === 4) {
     sceneText.html('Designed and implemented by Fangxiao "Ricky" Yu.' + "<br />" + "Advised by Prof. Janet Murray." + "<br />" + "Made as a master's project for MS Digital Media at Georgia Institute of Technology.");
     sceneName.html("Credits");  
     
     bigMask = createDiv("");
bigMask.id("bigMask");
bigMask.parent("sketchHolder");
bigMask.position(0, 0);

    
againBtn = createDiv("PLAY AGAIN");
againBtn.parent("sketchHolder");    
againBtn.position(340, 240);
againBtn.class('choice');
againBtn.mouseClicked(playAgain);

 }
    
if (i === 5) {
     sceneText.html("Special thanks to Charlie Denton, Vi Nguyen, Kantwon Rogers, Hao Wu, Yajing Yang, and... ." )

}

if (i === 6) {
    
    sceneText.html("If you have any questions, please contact me at rickyyiew@outlook.com." + "<br />" + 'Follow me on Instagram: "ricky_yiew". ' + "<br />" +'Visit my website: www.yufangxiao.com.')
    
proceed.attribute('disabled', 'disabled');
proceed.style("cursor", "default");
proceed.hide();
arrow.visible = false;
   
}
    

        
}

function updateTextEnding2() {
i = i + 1;
sceneText.html(ending2Text[i]);

    
 if (i === 4) {
     sceneText.html('Designed and implemented by Fangxiao "Ricky" Yu.' + "<br />" + "Advised by Prof. Janet Murray." + "<br />" + "Made as a master's project for MS Digital Media at Georgia Institute of Technology.");
     sceneName.html("Credits");  
     
     bigMask = createDiv("");
bigMask.id("bigMask");
bigMask.parent("sketchHolder");
bigMask.position(0, 0);

    
againBtn = createDiv("PLAY AGAIN");
againBtn.parent("sketchHolder");    
againBtn.position(340, 240);
againBtn.class('choice');
againBtn.mouseClicked(playAgain);

 }
    
if (i === 5) {
     sceneText.html("Special thanks to Charlie Denton, Vi Nguyen, Kantwon Rogers, Hao Wu, Yajing Yang, and... .")

}

if (i === 6) {
    
    sceneText.html("If you have any questions, please contact me at rickyyiew@outlook.com." + "<br />" + 'Follow me on Instagram: "ricky_yiew". ' + "<br />" +'Visit my website: www.yufangxiao.com.')
    
proceed.attribute('disabled', 'disabled');
proceed.style("cursor", "default");
proceed.hide();
arrow.visible = false;
   
}
    

        
}

function updateTextEnding3() {
i = i + 1;
sceneText.html(ending3Text[i]);

    
 if (i === 4) {
     sceneText.html('Designed and implemented by Fangxiao "Ricky" Yu.' + "<br />" + "Advised by Prof. Janet Murray." + "<br />" + "Made as a master's project for MS Digital Media at Georgia Institute of Technology.");
     sceneName.html("Credits");  
     
     bigMask = createDiv("");
bigMask.id("bigMask");
bigMask.parent("sketchHolder");
bigMask.position(0, 0);

    
againBtn = createDiv("PLAY AGAIN");
againBtn.parent("sketchHolder");    
againBtn.position(340, 240);
againBtn.class('choice');
againBtn.mouseClicked(playAgain);

 }
    
if (i === 5) {
     sceneText.html("Special thanks to Charlie Denton, Vi Nguyen, Kantwon Rogers, Hao Wu, Yajing Yang, and... .")

}

if (i === 6) {
    
    sceneText.html("If you have any questions, please contact me at rickyyiew@outlook.com." + "<br />" + 'Follow me on Instagram: "ricky_yiew". ' + "<br />" +'Visit my website: www.yufangxiao.com.')
    
proceed.attribute('disabled', 'disabled');
proceed.style("cursor", "default");
proceed.hide();
arrow.visible = false;
   
}
    

        
}

function updateTextEnding4() {
i = i + 1;
sceneText.html(ending4Text[i]);

    
 if (i === 4) {
     sceneText.html('Designed and implemented by Fangxiao "Ricky" Yu.' + "<br />" + "Advised by Prof. Janet Murray." + "<br />" + "Made as a master's project for MS Digital Media at Georgia Institute of Technology.");
     sceneName.html("Credits");  
     
     bigMask = createDiv("");
bigMask.id("bigMask");
bigMask.parent("sketchHolder");
bigMask.position(0, 0);

    
againBtn = createDiv("PLAY AGAIN");
againBtn.parent("sketchHolder");    
againBtn.position(340, 240);
againBtn.class('choice');
againBtn.mouseClicked(playAgain);

 }
    
if (i === 5) {
     sceneText.html("Special thanks to Charlie Denton, Vi Nguyen, Kantwon Rogers, Hao Wu, Yajing Yang, and... .")

}

if (i === 6) {
    
    sceneText.html("If you have any questions, please contact me at rickyyiew@outlook.com." + "<br />" + 'Follow me on Instagram: "ricky_yiew". ' + "<br />" +'Visit my website: www.yufangxiao.com.')
    
proceed.attribute('disabled', 'disabled');
proceed.style("cursor", "default");
proceed.hide();
arrow.visible = false;
   
}
        
}

function skipIntro() {
status = "day1";
count = 0; 
first = true;
allWhite = false;
i = -1;
skip.remove();
sceneName.remove();
sceneText.remove();
proceed.remove(); 
scene = "Morning Court";
stringY = -227.5;
progress = 0;
}

function Btn1() {
    if (status === "intro") {
        mask.remove();
        arrow.visible = true;
        proceed.removeAttribute("disabled");
        proceed.style("cursor", "pointer");
        choiceBtn1.remove();
        choiceBtn2.remove();
        choiceBtn3.remove();
        choiceBtn4.remove();
        i = 0;
        introGeneral = false;
        GCIntro = true;
        updateTextIntro();
    }
}

function Btn2() {
    if (status === "intro") {
        mask.remove();
        arrow.visible = true;
        proceed.removeAttribute("disabled");
        proceed.style("cursor", "pointer");
        choiceBtn1.remove();
        choiceBtn2.remove();
        choiceBtn3.remove();
        choiceBtn4.remove();
        i = 0;
        introGeneral = false;
        EIntro = true;
        updateTextIntro();
    }
}

function Btn3() {
    if (status === "intro") {
        mask.remove();
        arrow.visible = true;
        proceed.removeAttribute("disabled");
        proceed.style("cursor", "pointer");
        choiceBtn1.remove();
        choiceBtn2.remove();
        choiceBtn3.remove();
        choiceBtn4.remove();
        i = 0;
        introGeneral = false;
        strategyIntro = true;
        updateTextIntro();
    } else {
        mask.hide();
        choiceBtn3.hide();
        choiceBtn4.hide();
        j = 0;
        update = true;
        progressChange.remove();
        poleChange.remove();
        
        if (meeting === "Grand Chancellor") {
            
                 if (GCMeet === 2) {
                power = 100
                stringMove = -325;
                stringDirection = "up";
                i = i + 1;
                dialogText.html("I really appreciate your trust in me, your majesty.");
                GCMeet = GCMeet + 1;
                GCRepeat = false;
            }
            
              if (GCMeet === 1) {
                power = power + 35;
                stringMove = stringY - 136.5;
                stringDirection = "up";
                i = i + 1;
                dialogText.html("I really appreciate your trust in me, your majesty.");
                GCMeet = GCMeet + 1;
                GCRepeat = false;
            }
            
            if (GCMeet === 0) {
                power = power + 25;
                stringMove = stringY - 97.5;
                stringDirection = "up";
                i = i + 1;
                dialogText.html("I really appreciate your trust in me, your majesty.");
                GCMeet = GCMeet + 1;
                GCRepeat = false;
            }
            
            
        }

        if (stringMove < -325) {
            stringMove = -325;
        }

        if (meeting === "eunuch") {
             if (eunuchMeet === 2) {

                power = 0;
                stringMove = 65;
                stringDirection = "down";
                i = i + 1;
                dialogText.html("Thanks for trusting me, your majesty.");
                eunuchMeet = eunuchMeet + 1;
                ERepeat = false;

            }
            
             if (eunuchMeet === 1) {

                power = power - 35;
                stringMove = stringY + 136.5;
                stringDirection = "down";
                i = i + 1;
                dialogText.html("Thanks for trusting me, your majesty.");
                eunuchMeet = eunuchMeet + 1;
                ERepeat = false;

            }

            if (eunuchMeet === 0) {

                power = power - 25;
                stringMove = stringY + 97.5;
                stringDirection = "down";
                i = i + 1;
                dialogText.html("Thanks for trusting me, your majesty.");
                eunuchMeet = eunuchMeet + 1;
                ERepeat = false;

            }
            
            
            
        }

        if (stringMove > 65) {
            stringMove = 65;
        }

    }
}

function Btn4() {
    if (status === "intro") {
        mask.hide();
        arrow.visible = true;
        proceed.removeAttribute("disabled");
        proceed.style("cursor", "pointer");
        choiceBtn1.remove();
        choiceBtn2.remove();
        choiceBtn3.remove();
        choiceBtn4.remove();
        i = 5;
        updateTextIntro();
    } else {

        if (meeting === "eunuch") {
            mask.hide();
            choiceBtn3.hide();
            choiceBtn4.hide();
            dialogText.html("I'm so sorry to bother you with this. If you need any help from me, please ask me to come here again. I shall bring you more useful ideas.");
            proceed.show();
            proceed.removeAttribute('disabled');
            proceed.style("cursor", "pointer");
            arrow.visible = true;
            studyEnd = true;
            i = i + 1;
            if (eunuchMeet > 0) {
                ERepeat = true;
            }
        }

        if (meeting === "Grand Chancellor") {
            mask.hide();
            choiceBtn3.hide();
            choiceBtn4.hide();
            dialogText.html("My apologies, your majesty. But I would still advise you to reconsider the things I said. I'll meet you again if you need anything.");
            proceed.show();
            proceed.removeAttribute('disabled');
            proceed.style("cursor", "pointer");
            arrow.visible = true;
            studyEnd = true;
            i = i + 1;
            GCRepeat = true;
        }
    }
}

function Btn1Over() {
    poleChange = createImg("image/up.png");
    poleChange.parent("sketchHolder");
    poleChange.position(1045, 194);
    if (status === "day1") {
        progressChange = createImg("image/increase.png");
        progressChange.parent("sketchHolder");
        progressChange.position(205, 15);
    }
    if (status === "day2") {
        progressChange = createImg("image/decrease.png");
        progressChange.parent("sketchHolder");
        if (progressFill === 0) {
            progressChange.position(205, 15);
        }
        if (progressFill === 110) {
            progressChange.position(315, 15);
        }

    }
      if (status === "day3") {
        progressChange = createImg("image/decrease.png");
        progressChange.parent("sketchHolder");
        if (progressFill === 0) {
            progressChange.position(205, 15);
        }
        if (progressFill === 110) {
            progressChange.position(315, 15);
        }
        if (progressFill === 220 || progressFill === 330) {
            progressChange.position(425, 15);
        }

    }
    
      if (status === "day4" || status === "day5") {
        progressChange = createImg("image/increase.png");
        progressChange.parent("sketchHolder");
        if (progressFill === 0) {
            progressChange.position(205, 15);
        }
        if (progressFill === 110) {
            progressChange.position(315, 15);
        }
        if (progressFill === 220 || progressFill === 330) {
            progressChange.position(425, 15);
        }

    }
}

function Btn2Over() {
    poleChange = createImg("image/down.png");
    poleChange.parent("sketchHolder");
    poleChange.position(1045, 442);
    if (status === "day1") {
        progressChange = createImg("image/increase.png");
        progressChange.parent("sketchHolder");
        progressChange.position(205, 15);

    }
    if (status === "day2") {
        progressChange = createImg("image/increase.png");
        progressChange.parent("sketchHolder");
        if (progressFill === 0) {
            progressChange.position(205, 15);
        }
        if (progressFill === 110) {
            progressChange.position(315, 15);
        }

    }
    
      if (status === "day3") {
        progressChange = createImg("image/increase.png");
        progressChange.parent("sketchHolder");
        if (progressFill === 0) {
            progressChange.position(205, 15);
        }
        if (progressFill === 110) {
            progressChange.position(315, 15);
        }
        if (progressFill === 220 || progressFill === 330) {
            progressChange.position(425, 15);
        }

    }
    
     if (status === "day4" || status === "day5") {
        progressChange = createImg("image/decrease.png");
        progressChange.parent("sketchHolder");
        if (progressFill === 0) {
            progressChange.position(205, 15);
        }
        if (progressFill === 110) {
            progressChange.position(315, 15);
        }
        if (progressFill === 220 || progressFill === 330) {
            progressChange.position(425, 15);
        }

    }
}

function Btn3Over() {
    if (meeting === "eunuch") {
        poleChange = createImg("image/down.png");
        poleChange.parent("sketchHolder");
        poleChange.position(1045, 442);
        progressChange = createDiv("");
    }

    if (meeting === "Grand Chancellor") {
        poleChange = createImg("image/up.png");
        poleChange.parent("sketchHolder");
        poleChange.position(1045, 194);
        progressChange = createDiv("");
    }

}

function BtnOut() {
    progressChange.remove();
    poleChange.remove();
}

function GCBtn() {
    progressChange.remove();
    poleChange.remove();
    mask.hide();
    choiceBtn1.hide();
    choiceBtn2.hide();
    GCHead.hide();
    MCHead.hide();
    dialogName.html("Grand Chancellor Li");
    i = 14;
    speakerCount = 0;
    if (power >= 45) {
        pass = true;
        power = power + 20;
        stringMove = stringY - 78;
        stringDirection = "up";
        if (progress < 330) {
            if (status === "day1" || status === "day4" || status === "day5") {
            progress = progress + 110;

        }
        if (status === "day2" || status === "day3") {
            if (progress !== 0) {
                progress = progress - 110;
            }
        }   
        }
     
        if (stringMove < -325) {
            stringMove = -325;
        }
        dialogText.html("It's your majesty's generosity to support my proposal. Since this solution is also what the majority of the court agrees with, I shall put it into effect as soon as possible.")

    } else {
        pass = false;
        dialogText.html("It's my honor to see your support for my solution. However, we have faced a strong opposition from the majority of the court, I have to apologize that I'm unable to move this solution forward. ")
    }
}

function MCBtn() {
    progressChange.remove();
    poleChange.remove();
    mask.hide();
    choiceBtn1.hide();
    choiceBtn2.hide();
    GCHead.hide();
    MCHead.hide();
    dialogName.html("Grand Chancellor Li");
    i = 14;
    speakerCount = 0;
    if (power <= 55) {
        pass = true;
        power = power - 20;
        stringMove = stringY + 78;
        stringDirection = "down";
        if (progress < 330) {
         if (status === "day1" || status === "day2" || status === "day3") {
            progress = progress + 110;
        }
        if (status === "day4" || status === "day5") {
            progress = progress - 110;
        }
   
        }
        
        if (stringMove > 65) {
            stringMove = 65;
        }
        dialogText.html("Although I personally don’t think this is a good idea, I’m unable to oppose to the opinions of the majority. We shall try our best to move this forward.")

    } else {
        pass = false;
        dialogText.html("Unfortunately, due to the opposition from the majority of the court, I am unable to carry out this solution. I believe this is a responsible choice for millions of people in our nation. Please forgive me for suggesting you to reconsider your decision.")
    }
}

function GCIn() {
    tint(255, 255);
    image(MC1, 790, 300, 95, 179);
    speakerCount = speakerCount + 1;
    tint(255, GCA);
    if (speakerCount <= 20) {
        image(GC1, 150, 300, 95, 179);
        GCA = GCA - 255 / 20;
    }
    if (speakerCount > 20 && speakerCount <= 40) {
        image(GC1, 467, 335, 105, 198);
        GCA = GCA + 255 / 20;
    }
    if (speakerCount > 40) {
        GCA = 255;
        if (i % 2 == 0) {
            image(GC1, 467, 335, 105, 198);
        } else {
            image(GC2, 462, 335, 115, 198)
        }
    }
}

function GCOut() {
    tint(255, 255);
    image(MC1, 790, 300, 95, 179);
    speakerCount = speakerCount + 1;
    tint(255, GCA);
    if (speakerCount <= 20) {
        image(GC2, 462, 335, 115, 198);
        GCA = GCA - 255 / 20;
    }
    if (speakerCount > 20 && speakerCount <= 40) {
        image(GC1, 150, 300, 95, 179);
        GCA = GCA + 255 / 20;
    }
    if (speakerCount > 40) {
        GCA = 255;
        image(GC1, 150, 300, 95, 179);
    }
}

function MCOut() {
    tint(255, 255);
    image(GC1, 150, 300, 95, 179);
    speakerCount = speakerCount + 1;
    tint(255, MCA);
    if (speakerCount <= 20) {
        image(MC1, 466, 335, 105, 198);
        MCA = MCA - 255 / 20;
    }
    if (speakerCount > 20 && speakerCount <= 40) {
        image(MC1, 790, 300, 95, 179);
        MCA = MCA + 255 / 20;
    }
    if (speakerCount > 40) {
        MCA = 255;
        image(MC1, 790, 300, 95, 179);
    }
}

function GCtoMC() {
    speakerCount = speakerCount + 1;
    if (speakerCount <= 20) {
        tint(255, GCA);
        image(GC2, 462, 335, 115, 198);
        GCA = GCA - 255 / 20;
        tint(255, 255);
        image(MC1, 790, 300, 95, 179);
    }
    if (speakerCount > 20 && speakerCount <= 40) {
        tint(255, GCA);
        image(GC1, 150, 300, 95, 179);
        GCA = GCA + 255 / 20;
        tint(255, MCA);
        image(MC1, 790, 300, 95, 179);
        MCA = MCA - 255 / 20;
    }
    if (speakerCount > 40 && speakerCount <= 60) {
        tint(255, 255);
        image(GC1, 150, 300, 95, 179);
        tint(255, MCA);
        image(MC1, 466, 335, 105, 198);
        MCA = MCA + 255 / 20;
    }
    if (speakerCount > 60) {
        tint(255, 255);
        image(GC1, 150, 300, 95, 179);
        if (i % 2 == 0) {
            image(MC1, 466, 335, 105, 198);
        } else {
            image(MC2, 466, 335, 155, 198)
        }
    }
}

function MCtoGC() {
    speakerCount = speakerCount + 1;
    if (speakerCount <= 20) {
        tint(255, MCA);
        image(MC1, 466, 335, 105, 198);
        MCA = MCA - 255 / 20;
        tint(255, 255);
        image(GC1, 150, 300, 95, 179);
    }
    if (speakerCount > 20 && speakerCount <= 40) {
        tint(255, MCA);
        image(MC1, 790, 300, 95, 179);
        MCA = MCA + 255 / 20;
        tint(255, GCA);
        image(GC1, 150, 300, 95, 179);
        GCA = GCA - 255 / 20;
    }
    if (speakerCount > 40 && speakerCount <= 60) {
        tint(255, 255);
        image(MC1, 790, 300, 95, 179);
        tint(255, GCA);
        image(GC1, 467, 335, 105, 198);
        GCA = GCA + 255 / 20;
    }
    if (speakerCount > 60) {
        tint(255, 255);
        image(MC1, 790, 300, 95, 179);
        if (i % 2 == 0) {
            image(GC1, 467, 335, 105, 198);
        } else {
            image(GC2, 462, 335, 115, 198)
        }
    }
}

function opinion() {
    if (opNow === true) {
        if (solution === "GC") {

            if (power >= 0 && power < 10) {
                op1 = createImg("image/no.png");
                op2 = createImg("image/no.png");
                op3 = createImg("image/no.png");
                op4 = createImg("image/no.png");
                op5 = createImg("image/yes.png");
                op6 = createImg("image/no.png");
                op7 = createImg("image/no.png");
                op8 = createImg("image/no.png");
                op9 = createImg("image/no.png");
                op10 = createImg("image/no.png");
                op11 = createImg("image/no.png");
                op12 = createImg("image/no.png");
                op13 = createImg("image/no.png");
                op14 = createImg("image/no.png");
            }

            if (power >= 10 && power < 20) {
                op1 = createImg("image/no.png");
                op2 = createImg("image/no.png");
                op3 = createImg("image/no.png");
                op4 = createImg("image/no.png");
                op5 = createImg("image/yes.png");
                op6 = createImg("image/yes.png");
                op7 = createImg("image/no.png");
                op8 = createImg("image/no.png");
                op9 = createImg("image/no.png");
                op10 = createImg("image/no.png");
                op11 = createImg("image/no.png");
                op12 = createImg("image/no.png");
                op13 = createImg("image/no.png");
                op14 = createImg("image/no.png");
            }

            if (power >= 20 && power < 30) {
                op1 = createImg("image/no.png");
                op2 = createImg("image/no.png");
                op3 = createImg("image/no.png");
                op4 = createImg("image/no.png");
                op5 = createImg("image/yes.png");
                op6 = createImg("image/yes.png");
                op7 = createImg("image/yes.png");
                op8 = createImg("image/no.png");
                op9 = createImg("image/no.png");
                op10 = createImg("image/no.png");
                op11 = createImg("image/no.png");
                op12 = createImg("image/no.png");
                op13 = createImg("image/no.png");
                op14 = createImg("image/no.png");
            }


            if (power >= 30 && power < 45) {
                op1 = createImg("image/yes.png");
                op2 = createImg("image/yes.png");
                op3 = createImg("image/no.png");
                op4 = createImg("image/no.png");
                op5 = createImg("image/yes.png");
                op6 = createImg("image/yes.png");
                op7 = createImg("image/yes.png");
                op8 = createImg("image/no.png");
                op9 = createImg("image/no.png");
                op10 = createImg("image/no.png");
                op11 = createImg("image/no.png");
                op12 = createImg("image/no.png");
                op13 = createImg("image/no.png");
                op14 = createImg("image/no.png");
            }

            if (power >= 45 && power <= 55) {
                op1 = createImg("image/yes.png");
                op2 = createImg("image/yes.png");
                op3 = createImg("image/yes.png");
                op4 = createImg("image/yes.png");
                op5 = createImg("image/yes.png");
                op6 = createImg("image/yes.png");
                op7 = createImg("image/yes.png");
                op8 = createImg("image/no.png");
                op9 = createImg("image/no.png");
                op10 = createImg("image/no.png");
                op11 = createImg("image/no.png");
                op12 = createImg("image/no.png");
                op13 = createImg("image/no.png");
                op14 = createImg("image/no.png");
            }


            if (power > 55 && power < 70) {
                op1 = createImg("image/yes.png");
                op2 = createImg("image/yes.png");
                op3 = createImg("image/yes.png");
                op4 = createImg("image/yes.png");
                op5 = createImg("image/yes.png");
                op6 = createImg("image/yes.png");
                op7 = createImg("image/yes.png");
                op8 = createImg("image/yes.png");
                op9 = createImg("image/yes.png");
                op10 = createImg("image/no.png");
                op11 = createImg("image/no.png");
                op12 = createImg("image/no.png");
                op13 = createImg("image/no.png");
                op14 = createImg("image/no.png");
            }



            if (power >= 70 && power < 80) {

                op1 = createImg("image/yes.png");
                op2 = createImg("image/yes.png");
                op3 = createImg("image/yes.png");
                op4 = createImg("image/yes.png");
                op5 = createImg("image/yes.png");
                op6 = createImg("image/yes.png");
                op7 = createImg("image/yes.png");
                op8 = createImg("image/yes.png");
                op9 = createImg("image/yes.png");
                op10 = createImg("image/yes.png");
                op11 = createImg("image/yes.png");
                op12 = createImg("image/no.png");
                op13 = createImg("image/no.png");
                op14 = createImg("image/no.png");
            }

            if (power >= 80 && power < 90) {
                op1 = createImg("image/yes.png");
                op2 = createImg("image/yes.png");
                op3 = createImg("image/yes.png");
                op4 = createImg("image/yes.png");
                op5 = createImg("image/yes.png");
                op6 = createImg("image/yes.png");
                op7 = createImg("image/yes.png");
                op8 = createImg("image/yes.png");
                op9 = createImg("image/yes.png");
                op10 = createImg("image/yes.png");
                op11 = createImg("image/yes.png");
                op12 = createImg("image/yes.png");
                op13 = createImg("image/no.png");
                op14 = createImg("image/no.png");
            }

            if (power >= 90 && power < 100) {
                op1 = createImg("image/yes.png");
                op2 = createImg("image/yes.png");
                op3 = createImg("image/yes.png");
                op4 = createImg("image/yes.png");
                op5 = createImg("image/yes.png");
                op6 = createImg("image/yes.png");
                op7 = createImg("image/yes.png");
                op8 = createImg("image/yes.png");
                op9 = createImg("image/yes.png");
                op10 = createImg("image/yes.png");
                op11 = createImg("image/yes.png");
                op12 = createImg("image/yes.png");
                op13 = createImg("image/yes.png");
                op14 = createImg("image/no.png");
            }

        }

        if (solution === "MC") {
            if (power >= 0 && power < 10) {
                op1 = createImg("image/yes.png");
                op2 = createImg("image/yes.png");
                op3 = createImg("image/yes.png");
                op4 = createImg("image/yes.png");
                op5 = createImg("image/no.png");
                op6 = createImg("image/yes.png");
                op7 = createImg("image/yes.png");
                op8 = createImg("image/yes.png");
                op9 = createImg("image/yes.png");
                op10 = createImg("image/yes.png");
                op11 = createImg("image/yes.png");
                op12 = createImg("image/yes.png");
                op13 = createImg("image/yes.png");
                op14 = createImg("image/yes.png");
            }

            if (power >= 10 && power < 20) {
                op1 = createImg("image/yes.png");
                op2 = createImg("image/yes.png");
                op3 = createImg("image/yes.png");
                op4 = createImg("image/yes.png");
                op5 = createImg("image/no.png");
                op6 = createImg("image/no.png");
                op7 = createImg("image/yes.png");
                op8 = createImg("image/yes.png");
                op9 = createImg("image/yes.png");
                op10 = createImg("image/yes.png");
                op11 = createImg("image/yes.png");
                op12 = createImg("image/yes.png");
                op13 = createImg("image/yes.png");
                op14 = createImg("image/yes.png");
            }

            if (power >= 20 && power < 30) {
                op1 = createImg("image/yes.png");
                op2 = createImg("image/yes.png");
                op3 = createImg("image/yes.png");
                op4 = createImg("image/yes.png");
                op5 = createImg("image/no.png");
                op6 = createImg("image/no.png");
                op7 = createImg("image/no.png");
                op8 = createImg("image/yes.png");
                op9 = createImg("image/yes.png");
                op10 = createImg("image/yes.png");
                op11 = createImg("image/yes.png");
                op12 = createImg("image/yes.png");
                op13 = createImg("image/yes.png");
                op14 = createImg("image/yes.png");
            }


            if (power >= 30 && power < 45) {
                op1 = createImg("image/no.png");
                op2 = createImg("image/no.png");
                op3 = createImg("image/yes.png");
                op4 = createImg("image/yes.png");
                op5 = createImg("image/no.png");
                op6 = createImg("image/no.png");
                op7 = createImg("image/no.png");
                op8 = createImg("image/yes.png");
                op9 = createImg("image/yes.png");
                op10 = createImg("image/yes.png");
                op11 = createImg("image/yes.png");
                op12 = createImg("image/yes.png");
                op13 = createImg("image/yes.png");
                op14 = createImg("image/yes.png");
            }

            if (power >= 45 && power <= 55) {
                op1 = createImg("image/no.png");
                op2 = createImg("image/no.png");
                op3 = createImg("image/no.png");
                op4 = createImg("image/no.png");
                op5 = createImg("image/no.png");
                op6 = createImg("image/no.png");
                op7 = createImg("image/no.png");
                op8 = createImg("image/yes.png");
                op9 = createImg("image/yes.png");
                op10 = createImg("image/yes.png");
                op11 = createImg("image/yes.png");
                op12 = createImg("image/yes.png");
                op13 = createImg("image/yes.png");
                op14 = createImg("image/yes.png");
            }


            if (power > 55 && power < 70) {
                op1 = createImg("image/no.png");
                op2 = createImg("image/no.png");
                op3 = createImg("image/no.png");
                op4 = createImg("image/no.png");
                op5 = createImg("image/no.png");
                op6 = createImg("image/no.png");
                op7 = createImg("image/no.png");
                op8 = createImg("image/no.png");
                op9 = createImg("image/no.png");
                op10 = createImg("image/yes.png");
                op11 = createImg("image/yes.png");
                op12 = createImg("image/yes.png");
                op13 = createImg("image/yes.png");
                op14 = createImg("image/yes.png");
            }



            if (power >= 70 && power < 80) {

                op1 = createImg("image/no.png");
                op2 = createImg("image/no.png");
                op3 = createImg("image/no.png");
                op4 = createImg("image/no.png");
                op5 = createImg("image/no.png");
                op6 = createImg("image/no.png");
                op7 = createImg("image/no.png");
                op8 = createImg("image/no.png");
                op9 = createImg("image/no.png");
                op10 = createImg("image/no.png");
                op11 = createImg("image/no.png");
                op12 = createImg("image/yes.png");
                op13 = createImg("image/yes.png");
                op14 = createImg("image/yes.png");
            }

            if (power >= 80 && power < 90) {
                op1 = createImg("image/no.png");
                op2 = createImg("image/no.png");
                op3 = createImg("image/no.png");
                op4 = createImg("image/no.png");
                op5 = createImg("image/no.png");
                op6 = createImg("image/no.png");
                op7 = createImg("image/no.png");
                op8 = createImg("image/no.png");
                op9 = createImg("image/no.png");
                op10 = createImg("image/no.png");
                op11 = createImg("image/no.png");
                op12 = createImg("image/no.png");
                op13 = createImg("image/yes.png");
                op14 = createImg("image/yes.png");
            }

            if (power >= 90 && power < 100) {
                op1 = createImg("image/no.png");
                op2 = createImg("image/no.png");
                op3 = createImg("image/no.png");
                op4 = createImg("image/no.png");
                op5 = createImg("image/no.png");
                op6 = createImg("image/no.png");
                op7 = createImg("image/no.png");
                op8 = createImg("image/no.png");
                op9 = createImg("image/no.png");
                op10 = createImg("image/no.png");
                op11 = createImg("image/no.png");
                op12 = createImg("image/no.png");
                op13 = createImg("image/no.png");
                op14 = createImg("image/yes.png");
            }
        }

        op1.parent("sketchHolder");
        op2.parent("sketchHolder");
        op3.parent("sketchHolder");
        op4.parent("sketchHolder");
        op5.parent("sketchHolder");
        op6.parent("sketchHolder");
        op7.parent("sketchHolder");
        op8.parent("sketchHolder");
        op9.parent("sketchHolder");
        op10.parent("sketchHolder");
        op11.parent("sketchHolder");
        op12.parent("sketchHolder");
        op13.parent("sketchHolder");
        op14.parent("sketchHolder");

        op1.position(125, 130);
        op1.class("smallOp");
        op2.position(167, 100);
        op2.class("bigOp");
        op2.style("animation-delay", "0.1s");
        op3.position(245, 130);
        op3.class("smallOp");
        op3.style("animation-delay", "0.2s");
        op4.position(287, 100);
        op4.class("bigOp");
        op4.style("animation-delay", "0.3s");
        op5.position(150, 215);
        op5.class("smallOp");
        op5.style("animation-delay", "0.4s");
        op6.position(198, 200);
        op6.class("midOp");
        op6.style("animation-delay", "0.5s");
        op7.position(270, 215);
        op7.class("smallOp");
        op7.style("animation-delay", "0.6s");
        op8.position(705, 130);
        op8.class("smallOp");
        op8.style("animation-delay", "0.7s");
        op9.position(747, 100);
        op9.class("bigOp");
        op9.style("animation-delay", "0.8s");
        op10.position(825, 130);
        op10.class("smallOp");
        op10.style("animation-delay", "0.9s");
        op11.position(867, 100);
        op11.class("bigOp");
        op11.style("animation-delay", "1s");
        op12.position(730, 215);
        op12.class("smallOp");
        op12.style("animation-delay", "1.1s");
        op13.position(778, 200);
        op13.class("midOp");
        op13.style("animation-delay", "1.2s");
        op14.position(850, 215);
        op14.class("smallOp");
        op14.style("animation-delay", "1.3s");

        opNow = false;

    }



}

function removeOp() {
    op1.remove();
    op2.remove();
    op3.remove();
    op4.remove();
    op5.remove();
    op6.remove();
    op7.remove();
    op8.remove();
    op9.remove();
    op10.remove();
    op11.remove();
    op12.remove();
    op13.remove();
    op14.remove();
}

function updateMeter() {
    
    if (stringY !== stringMove) {
        if (stringDirection === "up") {
            stringY = stringY - 195 / 120;
        }
        if (stringDirection === "down") {
            stringY = stringY + 195 / 120;
        }
    } else {

        j = j + 1
        if (j >= 15) {
            if (progressFill !== progress) {

                if (progressFill < progress) {
                    progressFill = progressFill + 2.5;
                } else {
                    progressFill = progressFill - 2.5;
                }


            }

        }

        if (j === 44) {

            proceed.show();
            proceed.removeAttribute('disabled');
            proceed.style("cursor", "pointer");
            arrow.visible = true;

        }


    }

    if (stringY <= -325 && stringY > -964) {
        k = k + 1;
        if (k >= 10) {
            stringY = stringY - 8;
            stringMove = stringY;
        }
    }

    if (stringY >= 65 && stringY < 1029) {
        k = k + 1;
        if (k >= 10) {
            stringY = stringY + 8;
            stringMove = stringY;
        }
    }


}

function party() {
    if (partyPower >= 90 && partyPower < 100) {
        party1 = image(redDouble, 120, 180, 105, 110);
        party2 = image(redDouble, 240, 180, 105, 110);
        party3 = image(redParty, 140, 250, 57, 129);
        party4 = image(redParty, 200, 250, 57, 129);
        party5 = image(redParty, 260, 250, 57, 129);

        party6 = image(redDouble, 700, 180, 105, 110);
        party7 = image(redDouble, 820, 180, 105, 110);
        party8 = image(redParty, 720, 250, 57, 129);
        party9 = image(redParty, 780, 250, 57, 129);
        party10 = image(blueParty, 840, 250, 57, 129);
    }

    if (partyPower >= 80 && partyPower < 90) {
        party1 = image(redDouble, 120, 180, 105, 110);
        party2 = image(redDouble, 240, 180, 105, 110);
        party3 = image(redParty, 140, 250, 57, 129);
        party4 = image(redParty, 200, 250, 57, 129);
        party5 = image(redParty, 260, 250, 57, 129);

        party6 = image(redDouble, 700, 180, 105, 110);
        party7 = image(redDouble, 820, 180, 105, 110);
        party8 = image(redParty, 720, 250, 57, 129);
        party9 = image(blueParty, 780, 250, 57, 129);
        party10 = image(blueParty, 840, 250, 57, 129);
    }

    if (partyPower >= 70 && partyPower < 80) {
        party1 = image(redDouble, 120, 180, 105, 110);
        party2 = image(redDouble, 240, 180, 105, 110);
        party3 = image(redParty, 140, 250, 57, 129);
        party4 = image(redParty, 200, 250, 57, 129);
        party5 = image(redParty, 260, 250, 57, 129);

        party6 = image(redDouble, 700, 180, 105, 110);
        party7 = image(redDouble, 820, 180, 105, 110);
        party8 = image(blueParty, 720, 250, 57, 129);
        party9 = image(blueParty, 780, 250, 57, 129);
        party10 = image(blueParty, 840, 250, 57, 129);
    }

    if (partyPower > 55 && partyPower < 70) {
        party1 = image(redDouble, 120, 180, 105, 110);
        party2 = image(redDouble, 240, 180, 105, 110);
        party3 = image(redParty, 140, 250, 57, 129);
        party4 = image(redParty, 200, 250, 57, 129);
        party5 = image(redParty, 260, 250, 57, 129);

        party6 = image(redDouble, 700, 180, 105, 110);
        party7 = image(blueDouble, 820, 180, 105, 110);
        party8 = image(blueParty, 720, 250, 57, 129);
        party9 = image(blueParty, 780, 250, 57, 129);
        party10 = image(blueParty, 840, 250, 57, 129);
    }

    if (partyPower >= 45 && partyPower <= 55) {
        party1 = image(redDouble, 120, 180, 105, 110);
        party2 = image(redDouble, 240, 180, 105, 110);
        party3 = image(redParty, 140, 250, 57, 129);
        party4 = image(redParty, 200, 250, 57, 129);
        party5 = image(redParty, 260, 250, 57, 129);

        party6 = image(blueDouble, 700, 180, 105, 110);
        party7 = image(blueDouble, 820, 180, 105, 110);
        party8 = image(blueParty, 720, 250, 57, 129);
        party9 = image(blueParty, 780, 250, 57, 129);
        party10 = image(blueParty, 840, 250, 57, 129);
    }

    if (partyPower >= 30 && partyPower < 45) {
        party1 = image(redDouble, 120, 180, 105, 110);
        party2 = image(blueDouble, 240, 180, 105, 110);
        party3 = image(redParty, 140, 250, 57, 129);
        party4 = image(redParty, 200, 250, 57, 129);
        party5 = image(redParty, 260, 250, 57, 129);

        party6 = image(blueDouble, 700, 180, 105, 110);
        party7 = image(blueDouble, 820, 180, 105, 110);
        party8 = image(blueParty, 720, 250, 57, 129);
        party9 = image(blueParty, 780, 250, 57, 129);
        party10 = image(blueParty, 840, 250, 57, 129);
    }

    if (partyPower >= 20 && partyPower < 30) {
        party1 = image(blueDouble, 120, 180, 105, 110);
        party2 = image(blueDouble, 240, 180, 105, 110);
        party3 = image(redParty, 140, 250, 57, 129);
        party4 = image(redParty, 200, 250, 57, 129);
        party5 = image(redParty, 260, 250, 57, 129);

        party6 = image(blueDouble, 700, 180, 105, 110);
        party7 = image(blueDouble, 820, 180, 105, 110);
        party8 = image(blueParty, 720, 250, 57, 129);
        party9 = image(blueParty, 780, 250, 57, 129);
        party10 = image(blueParty, 840, 250, 57, 129);
    }

    if (partyPower >= 10 && partyPower < 20) {
        party1 = image(blueDouble, 120, 180, 105, 110);
        party2 = image(blueDouble, 240, 180, 105, 110);
        party3 = image(redParty, 140, 250, 57, 129);
        party4 = image(redParty, 200, 250, 57, 129);
        party5 = image(blueParty, 260, 250, 57, 129);

        party6 = image(blueDouble, 700, 180, 105, 110);
        party7 = image(blueDouble, 820, 180, 105, 110);
        party8 = image(blueParty, 720, 250, 57, 129);
        party9 = image(blueParty, 780, 250, 57, 129);
        party10 = image(blueParty, 840, 250, 57, 129);
    }

    if (partyPower > 0 && partyPower < 10) {
        party1 = image(blueDouble, 120, 180, 105, 110);
        party2 = image(blueDouble, 240, 180, 105, 110);
        party3 = image(redParty, 140, 250, 57, 129);
        party4 = image(blueParty, 200, 250, 57, 129);
        party5 = image(blueParty, 260, 250, 57, 129);

        party6 = image(blueDouble, 700, 180, 105, 110);
        party7 = image(blueDouble, 820, 180, 105, 110);
        party8 = image(blueParty, 720, 250, 57, 129);
        party9 = image(blueParty, 780, 250, 57, 129);
        party10 = image(blueParty, 840, 250, 57, 129);
    }





}

function dismiss() {
    i = i + 1;
    dismissBtn.hide();
    
    if (power > 0 && power < 100) {
    dialogName.html("Eunuch");
    dialogText.html("Your majesty, could you please tell me about your plan after court? I'll get you prepared.");
    
    afterCourtPlan = true;   
    } else {
        
    count = 0;
    first = true;
    allWhite = false;
    dialogText.remove();
    dialogName.remove();
    proceed.remove();
    mask.remove();
    locationA = 0;    
        
    if (power <= 0) {
    status = "ending4";
    }
        
    if (power >= 100) {
    status = "ending3";
    }
    }
    
    
}

function meetGC() {
    scene = "Royal Study";
    meeting = "Grand Chancellor";
    nextBtn.hide();
    mask.hide();
    count = 0;
    first = true;
    allWhite = false;
    dialogText.hide();
    dialogName.hide();
    locationA = 0;
    proceed.remove();
    i = -1;
    j = 0;
    meetGCBtn.hide();
    meetEBtn.hide();
    studyEnd = false;

}

function meetE() {
    scene = "Royal Study";
    meeting = "eunuch";
    nextBtn.hide();
    mask.hide();
    count = 0;
    first = true;
    allWhite = false;
    dialogText.hide();
    dialogName.hide();
    locationA = 0;
    proceed.remove();
    i = -1;
    j = 0;
    meetGCBtn.hide();
    meetEBtn.hide();
    studyEnd = false;

}

function courtSetup() {
 count = count + 1


    if (count > 30) {
        image(court, -5, 5, 1040, 580);

        image(frame, 0, 0, 1230, 694);


        fill("#3f3f3f");
        textFont('Bevan');
        textSize(14);
        text("Preparation towards the war", 45, 20, 140);

        noStroke();
        fill("white");
        rect(195, 8, 330, 32, 10);

        fill(231, 182, 85);
        rect(195, 8, progressFill, 32, 10);

        fill("#3f3f3f");
        text("Day", 600, 30);

        fill("black");
        textFont("Roboto");
        text(dayNow + "/5", 650, 30);

        fill("#3f3f3f");
        textFont('Bevan');
        textSize(14);
        text("Location", 730, 30);
        fill("black");
        textFont("Roboto");
        text(scene, 820, 30);

        image(silk, 1032, 13, 190, 666);
        image(GCMonster, 1027, 5);
        image(EMonster, 1027, 533);
        image(string, 1112, stringY);
        textFont("Roboto");
        fill(201, 73, 67);
        textSize(11);
        text("Eunuch is too powerful", 1042, 515, 90, 50);
        text("Grand Chancellor is too powerful", 1042, 160, 90, 50);



        party();

        if (i < 0) {
            image(GC1, 150, 300, 95, 179);
            image(MC1, 790, 300, 95, 179);
        }


        if (first === true) {
            dialogName.show();
            dialogName.html("Everybody");
            dialogText.show();
            dialogText.html("Long live the emperor!");

            proceed = createButton('');
            proceed.id('proceed');
            proceed.parent("sketchHolder");
            proceed.position(0, 50);

            partyPower = power;

            first = false;

        }
    }

    // "day + 1" animation

    if (count > 100 && count <= 115) {
        imageMode(CENTER);
        tint(255, ODMA);
        image(oneDayMore, 660, 25, ODMR, ODMR);
        ODMA = ODMA + 255 / 15;
        ODMR = ODMR + 40 / 15;
    }

    if (count > 115 && count <= 175) {
        imageMode(CENTER);
        tint(255, 255)
        image(oneDayMore, 660, 25, 40, 40);
    }

    if (count === 175) {
        dayNow = dayNow + 1;
    }

    if (count > 175 && count < 190) {
        imageMode(CENTER);
        tint(255, ODMA);
        image(oneDayMore, 660, 25, ODMR, ODMR);
        ODMA = ODMA - 255 / 15;
        ODMR = ODMR + 40 / 15;
    }

    imageMode(CORNER);

    if (count > 100 && count < 130) {
        tint(255, locationA);
        image(courtLocation, 380, 260);

        locationA = locationA + 255 / 30;


    }

    if (count >= 130 && count < 245) {
        tint(255, 255);
        image(courtLocation, 380, 260);
    }

    if (count >= 245 && count <= 320) {
        tint(255, locationA);
        image(courtLocation, 380, 260);

        locationA = locationA - 255 / 75;
    }

    if (count < 102) {
        transition();
    }

    if (count >= 300) {
        tint(255, 255);
        animation(arrow, 940, 585);
        if (count === 300) {
            arrow.visible = true;
        }


    }
}

function showPlan() {
   planCount = planCount + 1    
   
   if (planCount === 1) {
   planMask = createDiv("");
   planMask.id("planMask");
   planMask.parent("sketchHolder");
   planMask.position(0, 48);    
   }
   
    
   if (planCount === 25) {
    meetGCBtn = createDiv("Meet Grand Chancellor Li in Royal Study");
    meetGCBtn.class("choice");
    meetGCBtn.parent("sketchHolder");
    meetGCBtn.position(260, 180);
    meetGCBtn.mouseClicked(meetGC);
    meetEBtn = createDiv("Meet Eunuch Wang in Royal Study");
    meetEBtn.class("choice");
    meetEBtn.parent("sketchHolder");
    meetEBtn.position(260, 260);
    meetEBtn.mouseClicked(meetE);
    nextBtn.show();
    nextBtn.position(260, 340);
    nextBtn.html("Won't meet anyone and END THIS DAY"); 
       
    
   }
    
   if (planCount === 49) {
       planMask.remove();
       afterCourtPlan = false;
   }
    
        
    
    }

function playAgain() {
    location.reload();
}
