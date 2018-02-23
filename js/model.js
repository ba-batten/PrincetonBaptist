function AppViewModel() {
  var self = this;

  self.staff = ko.observableArray([
    {
      name: 'Dwayne Batten',
      position: 'Senior Pastor',
      bio: 'Pastor Dwayne attended Piedmont International University and ' +
      'received a bachelor of Theology as well as a Masters in Pastoral Studies.' +
      ' He has pastored churches in Ohio, Tennessee, and North Carolina. He is ' +
      'married to Debbie and they have two grown sons.  Pastor Dwayne has been ' +
      'on staff at PBC since September 2004.',
      pic: 'http://via.placeholder.com/350x400'
    },
    {
      name: 'RJ Smith',
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
      pic: 'http://via.placeholder.com/350x400'
    },
    {
      name: 'Trevor Clatterbuck',
      position: 'Worship Pastor',
      bio: 'Trevor has served as Worship pastor at several churches in Virginia ' +
      'and Louisiana. He has also served as youth pastor at churches in Virginia' +
      ' and Mississippi. Other ministry positions he has been involved in ' +
      'include, small group leader and mission’s coordinator. Trevor’s education ' +
      'includes a B.A. in Music and a concentration in Church music from ' +
      'Bluefield College. He is also working to complete an MDiv, from ' +
      'Southeastern Baptist Theological Seminary. Trevor is married to his ' +
      'college sweetheart, Mary Ann, and they have a son, Caleb.',
      pic: 'http://via.placeholder.com/350x400'
    },
    {
      name: 'Peggy Jordan',
      position: 'Secretary',
      bio: 'Peggy is our church secretary.  She attended Hardbarger Business ' +
      'College in Raleigh.  She is married to Harvey and they reside in ' +
      'Rosewood.  She has two daughters and four grandchildren.  Peggy has been ' +
      'on staff at PBC since October 2010.',
      pic: 'http://via.placeholder.com/350x400'
    }
  ]);

  self.events = ko.observableArray([
    {
      title: 'Call of the Wild',
      time: 'March 4 at 5:00 PM',
      description: 'Men, bring your best game recipe prepared and let\'s enjoy ' +
      'the fruit of our harvest together while we hear from guest speaker ' +
      'Brandon Thornton from Loxley, Alabama.',
      pic: 'http://via.placeholder.com/350'
    },
    {
      title: 'Women\'s Ministry Gathering',
      time: 'February 27 at 6:30 PM',
      description: 'Guest teacher Angie Bridgers will be speaking on \"Biblical ' +
      'Journaling\". You only need to bring your Bible.  Light refreshments will' +
      'be served.',
      pic: 'http://via.placeholder.com/350'
    },
  ]);
}

var data = new AppViewModel();

ko.applyBindings(data);
