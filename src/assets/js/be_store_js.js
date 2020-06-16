$( document ).ready( function($) {
    $( '.be_store_categories_dropdown' ).on( 'click', function( e ) {
        e.preventDefault();
        $( '.be_store_categories_menu' ).toggleClass( 'show' );
        console.log( 'click event' );
    } );
} );