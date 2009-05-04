(function($){
  $.fn.autoLabel = function(options){
    options = $.extend({
      stale_class:'untouched',
      hover_class:'hover',
      focus_class:'focus'
    }, options)
    return this.each(function(){
      var $this = $(this);
      var $label = $('label[for='+$this.attr('id')+']');
      var $text = $label.text();
      if($this.val() == ""){
        $this.addClass(options.stale_class).val($text);        
      }
      $this.focus(function(e){
        $this.addClass(options.focus_class);
        if($this.val() == $text){
          $this.val("").removeClass(options.stale_class);
        }
      }).blur(function(e){
        $this.removeClass(options.focus_class);
        if($this.val() == ""){
          $this.val($text).addClass(options.stale_class);
        }
      }).mouseover(function(){
        $this.addClass(options.hover_class);
      }).mouseout(function(){
        $this.removeClass(options.hover_class);
      }).parents('form').submit(function(){
        if($this.val() == $text) $this.val("");
      }).bind('invalid-form.validate', function(){
        $this.triggerHandler('blur');
      });
      $label.hide();
    }).addClass('untouched');
  }
})(jQuery);
