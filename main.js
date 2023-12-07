$(document).ready(function (){
    $('header button').click(function() {
        $('form').slideDown();
    })
    
    $('#button-cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const adressImgnew = $('#adress-img-new').val();
        const newItem = $('<li style="display: none"></li>');
        $(`<img src="${adressImgnew}" />`).appendTo(newItem);
        $(`
        <div class="overlay-img-link">
            <a hreft="${adressImgnew}" target="_blank" title="Ver imagem em tamanho original">]
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);
        $('#adress-img-new').val('');
    })
})