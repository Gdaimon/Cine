var AppRouter = Backbone.Router.extend({
	routes: {
		"": "listado",
		"items-menu/nuevo": "itemFormulario",
		"items-menu/:item": "itemDetalles"
	},

	listado: function () {
		$('#app').html('Listado de Items');
	},

	itemDetalles: function (item) {
		$('#app').html('Item: ' + item);
	},

	itemFormulario: function () {
		$('#app').html('Nuevo item');
	}
});

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});