$(document).ready(function () {

    $('.card-header a.card-link').on('click', function () {
            if( $( this ).prev( 'i' ).hasClass( 'fa-caret-down' ) ){
                $( this ).prev( 'i' ).removeClass( 'fa-caret-down' ).addClass( 'fa-caret-right' );
            }
            else{
                if( $( this ).prev( 'i' ).hasClass( 'fa-caret-right' ) ){
                    $( this ).prev( 'i' ).removeClass( 'fa-caret-right' ).addClass( 'fa-caret-down' );
                }
            }
    });

});