var quickPressLoad;

(function ($) {
	/* QuickPress */
	quickPressLoad = function() {
		var act = $('#quickpost-action'), t;
		t = $('#quick-press').submit( function() {
			$('#dashboard_quick_draft #publishing-action .spinner').show();
			$('#quick-press .submit input[type="submit"], #quick-press .submit input[type="reset"]').prop('disabled', true);

			if ( 'post' == act.val() ) {
				act.val( 'post-quickpress-publish' );
			}

			$('#dashboard_quick_draft div.inside').load( t.attr( 'action' ), t.serializeArray(), function() {
				$('#dashboard_quick_draft #publishing-action .spinner').hide();
				$('#quick-press .submit input[type="submit"], #quick-press .submit input[type="reset"]').prop('disabled', false);
				quickPressLoad();
			} );
			return false;
		} );

		$('#publish').click( function() { act.val( 'post-quickpress-publish' ); } );

		$('#title, #tags-input').each( function() {
			var input = $(this), prompt = $('#' + this.id + '-prompt-text');

			if ( '' === this.value )
				prompt.removeClass('screen-reader-text');

			prompt.click( function() {
				$(this).addClass('screen-reader-text');
				input.focus();
			});

			input.blur( function() {
				if ( '' === this.value )
					prompt.removeClass('screen-reader-text');
			});

			input.focus( function() {
				prompt.addClass('screen-reader-text');
			});
		});

		$('#quick-press').on( 'click focusin', function() {
			wpActiveEditor = 'content';
		});
	};
	quickPressLoad();
}(jQuery));