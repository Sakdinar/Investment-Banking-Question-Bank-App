angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/homepage.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
})

//controller for understanding banking
.controller('UBCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  //get a random question number, limits (15) need to be adjusted whenever more questions are added or removed
  qNum = Math.floor((Math.random() * 15) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 15) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 15) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  //establish firebase connection with understandingbanking child and questions
  question = firebase.database().ref().child("understanding-banking").child(qNum).child("question")
  answer = firebase.database().ref().child("understanding-banking").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})


//controller for warren buffett questions
.controller('WBCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 10) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 10) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 10) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("warren-buffett").child(qNum).child("question")
  answer = firebase.database().ref().child("warren-buffett").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})


//controller for why banking questions
.controller('WhyBCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 7) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 7) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 7) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("why-banking").child(qNum).child("question")
  answer = firebase.database().ref().child("why-banking").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})


//controller for failure questions
.controller('FailureCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 10) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 10) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 10) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("failure").child(qNum).child("question")
  answer = firebase.database().ref().child("failure").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})


//controller for outside the box questions
.controller('outsidetheboxCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 6) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 6) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 6) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("outside-the-box").child(qNum).child("question")
  answer = firebase.database().ref().child("outside-the-box").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})


//controller for restructuring and distress M&A
.controller('restructdistressCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 40) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 40) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 40) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("restruct-distress").child(qNum).child("question")
  answer = firebase.database().ref().child("restruct-distress").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})



//controller for accounting questions
.controller('accountingCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 33) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 33) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 33) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("accounting").child(qNum).child("question")
  answer = firebase.database().ref().child("accounting").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})



//controller accounting advanced questions
.controller('accountingAdvancedCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 15) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 15) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 15) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("accounting-advanced").child(qNum).child("question")
  answer = firebase.database().ref().child("accounting-advanced").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})



//basic enterprise/equity questions
.controller('enterpriseEvCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 15) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 15) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 15) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("enterprise-EV").child(qNum).child("question")
  answer = firebase.database().ref().child("enterprise-EV").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})




//advanced enterprise/equity value controller
.controller('advEnterpriseEvCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 3) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 3) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 3) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("advanced-enterprise-EV").child(qNum).child("question")
  answer = firebase.database().ref().child("advanced-enterprise-EV").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})





//basic valuation controller
.controller('valuationCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 35) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 35) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 35) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("valuation").child(qNum).child("question")
  answer = firebase.database().ref().child("valuation").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})




//advanced valuation controller
.controller('advValuationCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 14) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 14) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 14) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("advanced-valuation").child(qNum).child("question")
  answer = firebase.database().ref().child("advanced-valuation").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})




//basic dfc controller
.controller('dcfCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 32) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 32) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 32) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("dcf").child(qNum).child("question")
  answer = firebase.database().ref().child("dcf").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})





//advanced dfc controller
.controller('advDcfCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 7) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 7) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 7) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("adv-dcf").child(qNum).child("question")
  answer = firebase.database().ref().child("adv-dcf").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})





//basic merger controller
.controller('mergerCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 24) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 24) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 24) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("merger").child(qNum).child("question")
  answer = firebase.database().ref().child("merger").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})





//advanced merger controller
.controller('advMergerCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 22) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 22) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 22) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("adv-merger").child(qNum).child("question")
  answer = firebase.database().ref().child("adv-merger").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})





//basic leveraged buyout controller
.controller('lboCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 22) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 22) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 22) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("lbo").child(qNum).child("question")
  answer = firebase.database().ref().child("lbo").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})






//advanced leveraged buyout controller
.controller('advLboCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 11) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 11) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 11) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("adv-lbo").child(qNum).child("question")
  answer = firebase.database().ref().child("adv-lbo").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})







//brain teasers controller
.controller('brainteaserCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 4) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 4) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 4) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("brainteaser").child(qNum).child("question")
  answer = firebase.database().ref().child("brainteaser").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})







//brain teasers controller
.controller('brainteaserCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 4) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 4) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 4) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("brainteaser").child(qNum).child("question")
  answer = firebase.database().ref().child("brainteaser").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})





//brain teasers controller
.controller('brainteaserCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 4) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 4) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 4) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("brainteaser").child(qNum).child("question")
  answer = firebase.database().ref().child("brainteaser").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})





//brain teasers controller
.controller('brainteaserCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 4) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 4) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 4) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("brainteaser").child(qNum).child("question")
  answer = firebase.database().ref().child("brainteaser").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})





//brain teasers controller
.controller('brainteaserCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 4) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 4) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 4) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("brainteaser").child(qNum).child("question")
  answer = firebase.database().ref().child("brainteaser").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})




//analytical controller
.controller('analyticalCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 9) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 9) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 9) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("analytical").child(qNum).child("question")
  answer = firebase.database().ref().child("analytical").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})




//background controller
.controller('backgroundCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 10) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 10) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 10) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("background").child(qNum).child("question")
  answer = firebase.database().ref().child("background").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})





//career controller
.controller('careerCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 6) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 6) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 6) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("career").child(qNum).child("question")
  answer = firebase.database().ref().child("career").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})






//commitment controller
.controller('commitmentCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 7) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 7) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 7) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("commitment").child(qNum).child("question")
  answer = firebase.database().ref().child("commitment").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})





//culture controller
.controller('cultureCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 7) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 7) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 7) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("culture").child(qNum).child("question")
  answer = firebase.database().ref().child("culture").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})






//future controller
.controller('futureCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 4) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 4) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 4) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("future").child(qNum).child("question")
  answer = firebase.database().ref().child("future").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})





//strength/weakness controller
.controller('streWeakCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 9) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 9) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 9) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("strength-weakness").child(qNum).child("question")
  answer = firebase.database().ref().child("strength-weakness").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})





//team/leadership controller
.controller('teamCtrl', function($scope, $timeout, $state, $ionicNavBarDelegate, $rootScope) {
  //ensure that side menu and navbar is always presenting when entering the view
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });

  $timeout(function() {

  qNum = Math.floor((Math.random() * 8) + 1);

  //check if the last question number is the same as this current question number
  while ($rootScope.first == qNum) {
    //if it is then grab another question
    qNum = Math.floor((Math.random() * 8) + 1);

    if (qNum == $rootScope.first) {
      qNum = Math.floor((Math.random() * 8) + 1);
    }
  }

  qNum = qNum.toString();
  $rootScope.first = qNum;

  question = firebase.database().ref().child("team").child(qNum).child("question")
  answer = firebase.database().ref().child("team").child(qNum).child("answer")

  //bind question to html element
  question.once('value', function(datasnapshot) {
    $timeout(function() {
      $scope.question = datasnapshot.val();
    });
  });

  //bind solution to html element
  $scope.showSolution = function() {
    answer.once('value', function(datasnapshot) {
      $timeout(function() {
        $scope.answer = datasnapshot.val();
      })
    });
  };

  //refresh the state to get the next question
  $scope.nextQ = function() {
    $timeout(function() {
      $state.reload();
    })
  };
});
})





.controller('PlaylistCtrl', function($scope, $stateParams) {
});
