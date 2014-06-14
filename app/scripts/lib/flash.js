EmberCodetails.FlashMessage = Ember.Object.extend({
  type: "notice",

  message: null,

  isNotice: (function() {
    return this.get("type") === "notice";
  }).property("type").cacheable(),

  isWarning: (function() {
    return this.get("type") === "warning";
  }).property("type").cacheable(),

  isError: (function() {
    return this.get("type") === "error";
  }).property("type").cacheable()

});

EmberCodetails.FlashView = Ember.View.extend({

  contentBinding: "EmberCodetails.FlashController.content",

  classNameBindings: ["isNotice", "isWarning", "isError"],

  isNoticeBinding: "content.isNotice",

  isWarningBinding: "content.isWarning",

  isErrorBinding: "content.isError",

  didInsertElement: function() {
    this.$("#message").hide();
    return EmberCodetails.FlashController.set("view", this);
  },

  show: function(callback) {
    return this.$("#message").css({
      top: "-40px"
    }).animate({
      top: "+=40",
      opacity: "toggle"
    }, 500, callback);
  },

  hide: function(callback) {
    return this.$("#message").css({
      top: "0px"
    }).animate({
      top: "-39px",
      opacity: "toggle"
    }, 500, callback);
  }
});

EmberCodetails.FlashController = Ember.Object.create({
  content: null,
  clearContent: function(content, view) {
    return view.hide(function() {
      return EmberCodetails.FlashQueue.removeObject(content);
    });
  }
});

EmberCodetails.FlashController.addObserver('content', function() {
  if (this.get("content")) {
    if (this.get("view")) {
      this.get("view").show();
      return setTimeout(this.clearContent, 4000, this.get("content"), this.get("view"));
    }
  } else {
    return EmberCodetails.FlashQueue.contentChanged();
  }
});

EmberCodetails.FlashQueue = Ember.ArrayProxy.create({
  content: [],
  contentChanged: function() {
    var current;
    current = EmberCodetails.FlashController.get("content");
    if (current !== this.objectAt(0)) {
      return EmberCodetails.FlashController.set("content", this.objectAt(0));
    }
  },
  pushFlash: function(type, message) {
    return this.pushObject(EmberCodetails.FlashMessage.create({
      message: message,
      type: type
    }));
  }
});

EmberCodetails.FlashQueue.addObserver('length', function() {
  return this.contentChanged();
});
