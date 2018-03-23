function AppViewModel() {
  var self = this;

  self.staff = ko.observableArray([
    // Staff pics need to be 350x400
    {
      name: 'Dwayne Batten',
      id: 'dwayneBatten',
      email: 'rdb114@juno.com',
      position: 'Senior Pastor',
      bio: 'Pastor Dwayne attended Piedmont International University and ' +
      'received a bachelor of Theology as well as a Masters in Pastoral Studies.' +
      ' He has pastored churches in Ohio, Tennessee, and North Carolina. He is ' +
      'married to Debbie and they have two grown sons.  Pastor Dwayne has been ' +
      'on staff at PBC since September 2004.',
      pic: 'images/dwayne.jpg'
    },
    {
      name: 'RJ Smith',
      id: 'rjSmith',
      email: 'rjsmith150@yahoo.com',
      position: 'Youth Pastor',
      bio: 'RJ has been in youth ministry since 2009, and joined the Princeton ' +
      'Baptist Church staff in 2017. He is married to Brandee and they have two ' +
      'sons, Kaydon (5) and Kingston(<1).  RJ attended Covington Theological ' +
      'Seminary where he earned his Associate of Religious Education. He is ' +
      'currently attending the College at Southeastern.  It is RJ’s desire to ' +
      'obey God’s commandments, to teach according to His Word, and to love the ' +
      'youth.  RJ loves to connect with the youth on a personal level.  It is ' +
      'not uncommon to see him on a Friday night at a football game then on a ' +
      'Saturday night at a dance recital! He loves to support the youth in any ' +
      'way he can.',
      pic: 'images/rj.jpg'
    },
    {
      name: 'Trevor Clatterbuck',
      id: 'trevorClatterbuck',
      email: 'twbuck10@gmail.com',
      position: 'Worship Pastor',
      bio: 'Trevor has served as Worship pastor at several churches in Virginia ' +
      'and Louisiana. He has also served as youth pastor at churches in Virginia' +
      ' and Mississippi. Other ministry positions he has been involved in ' +
      'include, small group leader and mission’s coordinator. Trevor’s education ' +
      'includes a B.A. in Music and a concentration in Church music from ' +
      'Bluefield College. He is also working to complete an MDiv, from ' +
      'Southeastern Baptist Theological Seminary. Trevor is married to his ' +
      'college sweetheart, Mary Ann, and they have a son, Caleb.',
      pic: 'images/trevor.jpg'
    },
    {
      name: 'Peggy Jordan',
      id: 'peggyJordan',
      email: '',
      position: 'Secretary',
      bio: 'Peggy is our church secretary.  She attended Hardbarger Business ' +
      'College in Raleigh.  She is married to Harvey and they reside in ' +
      'Rosewood.  She has two daughters and four grandchildren.  Peggy has been ' +
      'on staff at PBC since October 2010.',
      pic: 'images/peggy.jpg'
    }
  ]);

  self.events = ko.observableArray([
    // default picture url 'images/PBC_icon.svg'
    {
      title: 'Call of the Wild',
      time: 'March 4 at 5:00 PM',
      description: 'Men, bring your best game recipe prepared and let\'s enjoy ' +
      'the fruit of our harvest together while we hear from guest speaker ' +
      'Brandon Thornton from Loxley, Alabama.',
      pic: 'images/brandon_thornton.png'
    },
    {
      title: 'Women\'s Ministry Gathering',
      time: 'February 27 at 6:30 PM',
      description: 'Guest teacher Angie Bridgers will be speaking on \"Biblical ' +
      'Journaling\". You only need to bring your Bible.  Light refreshments will ' +
      'be served.',
      pic: 'images/PBC_icon.svg'
    },
  ]);

  self.contact = ko.observable(
    {
      churchAddress: '211 S Pearl St',
      officeAddress: '201 S Pearl St',
      mailingAddress: 'PO Box 215',
      city: 'Princeton',
      state: 'North Carolina',
      zip: '27569',
      churchPhone: '(919) 936-2793',
      churchTel: '1-919-936-2793',
      officePhone: '(919) 936-4001',
      officeTel: '1-919-936-4001',
      fax: '(919) 936-9937',
      email: 'princetonbaptist@embarqmail.com'
    }
  );

  self.publications = ko.observable(
    {
      newsletters: [
        {
          edition: 'Jan 2017',
          file: 'publications/newsletters/january_2017.pdf'
        },
        {
          edition: 'Feb 2017',
          file: 'publications/newsletters/february_2017.pdf'
        },
        {
          edition: 'April 2017',
          file: 'publications/newsletters/april_2017.pdf'
        },
        {
          edition: 'May 2017',
          file: 'publications/newsletters/may_2017.pdf'
        },
        {
          edition: 'June 2017',
          file: 'publications/newsletters/june_2017.pdf'
        },
        {
          edition: 'July 2017',
          file: 'publications/newsletters/july_2017.pdf'
        },
        {
          edition: 'Aug 2017',
          file: 'publications/newsletters/august_2017.pdf'
        },
        {
          edition: 'Sept 2017',
          file: 'publications/newsletters/september_2017.pdf'
        },
        {
          edition: 'Oct 2017',
          file: 'publications/newsletters/october_2017.pdf'
        },
        {
          edition: 'Dec 2017',
          file: 'publications/newsletters/december_2017.pdf'
        },

        {
          edition: 'Jan 2018',
          file: 'publications/newsletters/january_2018.pdf'
        },
        {
          edition: 'Feb 2018',
          file: 'publications/newsletters/february_2018.pdf'
        }
      ],
      bulletins: [
        {
          edition: 'Dec 31, 2017',
          file: 'publications/bulletins/12-31-2017.pdf'
        }
      ]
    }
  )

  self.awana = ko.observableArray([
    {
      group: 'AWANA',
      pic: 'images/awana-clubs-logo-color.svg',
      description: 'AWANA is a scripture memory club for children that is filled ' +
      'with fun games and Bible learning, and is a great tool for discipleship for ' +
      'families.\n\nAWANA is an acronym that stands for Approved Workmen Are Not ' +
      'Ashamed (taken from 2 Timothy 2:15). Your child will learn Bible verses that ' +
      'will be hidden in their hearts that will help them for years to come!\n\nAWANA ' +
      'is intended to be a parent participation program. We need parents\' help in ' +
      'order to make the AWANA club great. We ask parents to work alongside their ' +
      'children at club night and throughout the week, to ensure we have a strong ' +
      'program and to maximize discipleship.'
    },
    {
      group: 'Puggles',
      pic: 'images/puggles.svg',
      description: 'Puggles is an enriching program for your pre-Cubbies kids ' +
      '(usually older 2- and younger 3-year-olds) that presents basic biblical' +
      ' concepts:\n' + '•   We are a unique creation of God.\n•   God loves us very much.\n' +
      'Puggles teaches toddlers simple lessons through teaching cards, activities, ' +
      'music and more. Then parents—an Awana Puggle’s first and best teacher—can ' +
      'step in to reinforce the lessons with take-home cards that include ideas ' +
      'to point out God’s work each day. And little details like Awana Puggles ' +
      'T-shirts, puzzles and coloring books make every precious child feel like ' +
      'part of the group.'
    },
    {
      group: 'Cubbies',
      pic: 'images/CubbiesLogo.svg',
      description: 'Cubbies (four year olds by September 1) - Fun... and lots of ' +
      'it! Awana Cubbies is fun with a purpose; to reach and train kids for Jesus ' +
      'Christ. Games, puppets, awards and other activities transform our preschool ' +
      'program into a lively weekly experience where fun and learning go hand in hand.'
    },
    {
      group: 'Sparks',
      pic: 'images/sparks-logo-color.svg',
      description: 'Sparks (kindergarten - second grade) - Fun Learning = Results. ' +
      'Sparks club meetings combine learning with fun to create an atmosphere of ' +
      'irresistible excitement for all kids. Club meetings are divided into three segments:\n' +
      '•    Bible teaching, worship, award presentations and the gospel message\n' +
      '•    Small group interaction and completion of Bible-based lessons\n' +
      '•    Age-appropriate games on the Awana game circle\n' +
      'Along the way, Sparky, the friendly firefly, and his three friends have many ' +
      'exciting adventures. Sparky encourages kids to learn verses and complete ' +
      'assignments throughout the three handbooks.'
    },
    {
      group: 'Truth & Training',
      pic: 'images/TT_logo_large.svg',
      description: 'Truth and Training (third - sixth grade) - Exciting features ' +
      'to get kids excited about God\'s Word. Truth & Training is equipped with a ' +
      'variety of dynamic tools to accomplish this mission:\n' +
      '•    Four handbooks of increasing difficulty which teach children that life\'s '+
      'ultimate adventure is a personal relationship with Jesus Christ\n' +
      '•    Weekly meetings that expose children to the gospel message, Scripture ' +
      'memory, Bible study, awards, team-oriented games and gut-busting fun\n' +
      '•    A Bible-centered curriculum that helps kids build a firm foundation ' +
      'for their faith, hide God\'s Word in their heart and apply the truths of ' +
      'Scripture to their daily lives.'
    }
  ]);

  self.beliefs = ko.observableArray([
    {
      id: 'theScriptures',
      topic: 'The Scriptures',
      text: 'The Holy Bible was written by men divinely inspired and is God\'s revelation of Himself to man. It is a perfect treasure of divine instruction. It has God for its author, salvation for its end, and truth, without any mixture of error, for its matter. Therefore, all Scripture is totally true and trustworthy. It reveals the principles by which God judges us, and therefore is, and will remain to the end of the world the true center of Christian union, and the supreme standard by which all human conduct, creeds, and religious opinions should be tried. All Scripture is a testimony to Christ, who is Himself the focus of divine revelation.'
    },
    {
      id: 'god',
      topic: 'God',
      text: 'There is one and only one living and true God. …The eternal triune God reveals Himself to us as Father, Son and Holy Spirit, with distinct personal attributes, but without division of nature, essence, or being.'
    },
    {
      id: 'godTheFather',
      topic: 'God the Father',
      text: 'God as Father reigns with providential care over His universe, His creatures, and the flow of the stream of human history according to the purposes of His grace. …God is Father in truth to those who become children of God through faith in Jesus Christ.'
    },
    {
      id: 'godTheSon',
      topic: 'God the Son',
      text: 'Christ is the eternal Son of God. In His incarnation as Jesus Christ, He was conceived of the Holy Spirit and born of the virgin Mary. …He honored the divine law by His personal obedience, and in His substitutionary death on the cross, He made provision for the redemption of men from sin.'
    },
    {
      id: 'godTheHolySpirit',
      topic: 'God the Holy Spirit',
      text: 'The Holy Spirit is the Spirit of God, fully divine. …He exalts Christ. He convicts men of sin, of righteousness and of judgment. …He enlightens and empowers the believer and the church in worship, evangelism, and service.'
    },
    {
      id: 'man',
      topic: 'Man',
      text: 'Man is the special creation of God, in His own image. He created them male and female as the crowning work of His creation. …By his free choice man sinned against God and brought sin into the human race. … The sacredness of human personality is evident in that God created man in His own image, and in that Christ died for man; therefore every person of every race possesses dignity and is worthy of respect and Christian love.'
    },
    {
      id: 'salvation',
      topic: 'Salvation',
      text: 'Salvation involves the redemption of the whole man, and is offered freely to all who accept Jesus Christ as Lord and Saviour, who by His own blood obtained eternal redemption for the believer. In its broadest sense salvation includes regeneration, justification, sanctification, and glorification.'
    },
    {
      id: 'godsPurposeOfGrace',
      topic: 'God\'s Purpose of Grace',
      text: 'Election is the gracious purpose of God, according to which He regenerates, justifies, sanctifies, and glorifies sinners. …All true believers endure to the end. Those whom God has accepted in Christ, and sanctified by His Spirit will never fall away from the state of grace, but shall persevere to the end.'
    },
    {
      id: 'theChurch',
      topic: 'The Church',
      text: 'A New Testament church of the Lord Jesus Christ is an autonomous local congregation of baptized believers, associated by covenant in the faith and fellowship of the gospel, observing the two ordinances of Christ, governed by His laws, exercising the gifts, rights, and privileges invested in them by His Word, and seeking to extend the gospel to the ends of the earth. Each congregation operates under the Lordship of Christ through democratic processes. In such a congregation each member is responsible and accountable to Christ as Lord. Its scriptural officers are pastors and deacons. While both men and women are gifted for service in the church, the office of pastor is limited to men as qualified by Scripture.'
    },
    {
      id: 'baptismAndTheLordsSupper',
      topic: 'Baptism and the Lord\'s Supper',
      text: 'Christian baptism is the immersion of a believer in water. …It is an act of obedience symbolizing the believer\'s faith in a crucified, buried, and risen Saviour, the believer\'s death to sin, the burial of the old life, and the resurrection to walk in newness of life in Christ Jesus. ' +
      ' The Lord\'s Supper is a symbolic act of obedience whereby members … memorialize the death of the Redeemer and anticipate His second coming.'
    },
    {
      id: 'evangelismAndMissions',
      topic: 'Evangelism & Missions',
      text: 'It is the duty and privilege of every follower of Christ and every church of the Lord Jesus Christ to endeavor to make disciples of all nations... to seek constantly to win the lost to Christ by verbal witness undergirded by a Christian lifestyle, and by other methods in harmony with the gospel of Christ.'
    },
    {
      id: 'theLordsDay',
      topic: 'The Lord\'s Day',
      text: 'The first day of the week is the Lord\'s Day. …It commemorates the resurrection of Christ from the dead and should be employed in exercises of worship and spiritual devotion.'
    },
    {
      id: 'lastThings',
      topic: 'Last Things',
      text: 'God, in His own time and in His own way, will bring the world to its appropriate end. …Jesus Christ will return personally and visibly…the dead will be raised; and Christ will judge all men in righteousness. The unrighteous will be consigned to Hell. …The righteous… will receive their reward and will dwell forever in Heaven with the Lord.'
    },
    {
      id: 'education',
      topic: 'Education',
      text: 'The cause of education in the Kingdom of Christ is co-ordinate with the causes of missions and general benevolence … there should be a proper balance between academic freedom and academic responsibility. …The freedom of a teacher in a Christian school, college, or seminary is limited by the pre-eminence of Jesus Christ, by the authoritative nature of the Scriptures, and by the distinct purpose for which the school exists.'
    },
    {
      id: 'stewardship',
      topic: 'Stewardship',
      text: 'God is the source of all blessings, temporal and spiritual; all that we have and are we owe to Him. Christians have a spiritual debtorship to the whole world, a holy trusteeship in the gospel, and a binding stewardship in their possessions. They are therefore under obligation to serve Him with their time, talents, and material possessions.'
    },
    {
      id: 'cooperation',
      topic: 'Cooperation',
      text: 'Christ\'s people should … organize such associations and conventions as may best secure cooperation for the great objects of the Kingdom of God. Such organizations have no authority over one another or over the churches. …Cooperation is desirable between the various Christian denominations.'
    },
    {
      id: 'theChristianAndTheSocialOrder',
      topic: 'The Christian & the Social Order',
      text: 'All Christians are under obligation to seek to make the will of Christ supreme in our own lives and in human society... in the spirit of Christ, Christians should oppose racism, every form of greed, selfishness, and vice, and all forms of sexual immorality, including adultery, homosexuality, and pornography. We should work to provide for the orphaned, the needy, the abused, the aged, the helpless, and the sick. We should speak on behalf of the unborn and contend for the sanctity of all human life from conception to natural death...'
    },
    {
      id: 'religiousLiberty',
      topic: 'Religious Liberty',
      text: 'Church and state should be separate. The state owes to every church protection and full freedom in the pursuit of its spiritual ends. …A free church in a free state is the Christian ideal.'
    },
    {
      id: 'family',
      topic: 'Family',
      text: 'God has ordained the family as the foundational institution of human society. It is composed of persons related to one another by marriage, blood or adoption.  Marriage is the uniting of one man and one woman in covenant commitment for a lifetime. ... The husband and wife are of equal worth before God, since both are created in God\'s image. A husband is to love his wife as Christ loved the church. He has the God-given responsibility to provide for, to protect, and to lead his family. A wife is to submit herself graciously to the servant leadership of her husband even as the church willingly submits to the headship of Christ. She, being in the image of God as is her husband and thus equal to him, has the God-given responsibility to respect her husband and to serve as his helper in managing the household and nurturing the next generation... Children, from the moment of conception, are a blessing and heritage from the Lord. Parents are to demonstrate to their children God\'s pattern for marriage.'
    }
  ]);

  self.missions = ko.observableArray([
    {
      topic: 'Prepare',
      text: 'By empowering leaders and mission teams to create strategies and plans ' +
      'to take the gospel to their community, stated, continent, and world.'
    },
    {
      topic: 'Learn',
      text: 'About missions and increasing awareness of missions needs and missionaries ' +
      'by training its members.'
    },
    {
      topic: 'Pray',
      text: 'For a Kingdom and perspective and worldwide vision, to intercede for ' +
      'Christian workers and for unevangelized people at home and abroad.'
    },
    {
      topic: 'Give',
      text: 'To increase its financial support of the Cooperative Program and ' +
      'other cooperative missions by providing information and resources to its members.'
    },
    {
      topic: 'Go',
      text: 'By educating the church about opportunities to participate in short-term, ' +
      'long-term, and marketplace ministries that helps to spread the gospel beyond ' +
      'the church\'s walls.'
    },
    {
      topic: 'Tell',
      text: 'By involving an increasing number of our members in intentional, ' +
      'culturally relevant evangelism.'
    },
    {
      topic: 'Send',
      text: 'By providing our members with opportunities to hear God\'s call to ' +
      'vocational mission service.'
    },
    {
      topic: 'Multiply',
      text: 'By participating in church planting, and facilitating church planting ' +
      'movements that reach people that existing churches do not.'
    }
  ]);

  self.missionsPics = ko.observableArray([
    {
      url: 'images/ramp_build.jpg',
      altText: 'PBC Ramp Ministry',
      caption: 'PBC serves the community (Jerusalem) by building handicap ' +
        'access ramps for local residents and sharing the Gospel with them.'
    },
    {
      url: 'images/baptist_men.jpg',
      altText: 'Baptist Men',
      caption: 'PBC has partnered with the North Carolina Baptist ' +
      'Men to provide disaster relief across the entire state and region (Judea and Samaria)'
    },
    {
      url: 'images/uganda_kids.jpg',
      altText: 'Uganda',
      caption: 'PBC is actively involved with a church in Uganda (World) ' +
        'that reaches children with the Gospel through a school and an orphanage'
    }
  ]);
}

var data = new AppViewModel();

ko.applyBindings(data);
