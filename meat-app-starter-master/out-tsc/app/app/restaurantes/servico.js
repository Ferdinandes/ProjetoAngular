var RestauranteServico = /** @class */ (function () {
    function RestauranteServico() {
        this.rests = [
            {
                id: "bread-bakery",
                nome: "Bread & Bakery",
                categoria: "Bakery",
                tempoEstimado: "25m",
                avaliacao: 4.9,
                linkImg: "assets/img/restaurants/breadbakery.png"
            },
            {
                id: "burger-house",
                nome: "Burger House",
                categoria: "Hamburgers",
                tempoEstimado: "100m",
                avaliacao: 3.5,
                linkImg: "assets/img/restaurants/burgerhouse.png"
            }
        ];
    }
    RestauranteServico.prototype.restaurantes = function () {
        return this.rests;
    };
    return RestauranteServico;
}());
export { RestauranteServico };
//# sourceMappingURL=Servico.js.map