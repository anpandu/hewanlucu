'use strict';

/**
 * @ngdoc function
 * @name hewanlucuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hewanlucuApp
 */
angular.module('hewanlucuApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.images = [
      'http://ppcdn.500px.org/52866292/9e944f286e9ba110135839dca1aff8a18e18ffe8/2048.jpg',
      'http://i.imgur.com/YY3bLP7.jpg',
      'http://i.imgur.com/9lDdLYR.jpg',
      'http://i.imgur.com/1mAzNUY.jpg',
      'https://ppcdn.500px.org/96496237/c4fed65b554428956caf9c1792fbe9ad88131b24/2048.jpg',
      'http://i.imgur.com/fYYulaI.jpg',
      'http://i.imgur.com/gVX4eUj.jpg',
      'http://i.imgur.com/P0b09BO.jpg',
      'http://i.imgur.com/Eq0Z7vm.jpg',
      'http://i.imgur.com/XxMKKi1.jpg'
    ];
    $scope.items = [ 
	  { id: '2e3i50',
	    title: 'French bulldog puppy jumps into his owner\'s arms. Shows no hesitation second time around.',
	    domain: 'i.imgur.com',
	    raw_url: 'http://i.imgur.com/hcc0iD3.gif',
	    ups: 14494,
	    created: 1408558160,
	    permalink: '/r/aww/comments/2e3i50/french_bulldog_puppy_jumps_into_his_owners_arms/',
	    num_comments: 838 },
	  { id: '1urkrf',
	    title: 'My cat has one foggy eye. Add a bow tie and he instantly becomes a James Bond villain.',
	    domain: 'imgur.com',
	    raw_url: 'http://imgur.com/Cjn6NfS',
	    ups: 11573,
	    created: 1389235408,
	    permalink: '/r/aww/comments/1urkrf/my_cat_has_one_foggy_eye_add_a_bow_tie_and_he/',
	    num_comments: 649 },
	  { id: 'zzg3k',
	    title: 'My local humane society posts pictures of new adoptions. This one makes me so happy.',
	    domain: 'i.imgur.com',
	    raw_url: 'http://i.imgur.com/w3FzB.jpg',
	    ups: 10816,
	    created: 1347828369,
	    permalink: '/r/aww/comments/zzg3k/my_local_humane_society_posts_pictures_of_new/',
	    num_comments: 800 },
	  { id: '1l7zcx',
	    title: 'We were worried they wouldn\'t get along',
	    domain: 'i.imgur.com',
	    raw_url: 'http://i.imgur.com/JoF5FNd.jpg',
	    ups: 9502,
	    created: 1377648290,
	    permalink: '/r/aww/comments/1l7zcx/we_were_worried_they_wouldnt_get_along/',
	    num_comments: 388 },
	  { id: '2b8kc3',
	    title: 'A Black Leopard\'s reaction when he sees his favorite zoo keeper',
	    domain: 'i.imgur.com',
	    raw_url: 'http://i.imgur.com/VVlYLE8.gif',
	    ups: 8824,
	    created: 1405893463,
	    permalink: '/r/aww/comments/2b8kc3/a_black_leopards_reaction_when_he_sees_his/',
	    num_comments: 1647 },
	  { id: '1ggdnl',
	    title: 'He is crying because he thinks he is locked out ... Dumb as a brick but he is mine and I love him.',
	    domain: 'i.imgur.com',
	    raw_url: 'http://i.imgur.com/aNMtZIP.jpg',
	    ups: 8044,
	    created: 1371396302,
	    permalink: '/r/aww/comments/1ggdnl/he_is_crying_because_he_thinks_he_is_locked_out/',
	    num_comments: 367 },
	  { id: '1sacc8',
	    title: 'I still think he is cute...',
	    domain: 'i.imgur.com',
	    raw_url: 'http://i.imgur.com/fQpmoXE.jpg',
	    ups: 7798,
	    created: 1386380382,
	    permalink: '/r/aww/comments/1sacc8/i_still_think_he_is_cute/',
	    num_comments: 520 },
	  { id: '1safto',
	    title: 'French bulldog puppy meeting her human for the first time',
	    domain: 'i.imgur.com',
	    raw_url: 'http://i.imgur.com/xJaHdzV.gif',
	    ups: 7775,
	    created: 1386383199,
	    permalink: '/r/aww/comments/1safto/french_bulldog_puppy_meeting_her_human_for_the/',
	    num_comments: 689 }
	]

  });
