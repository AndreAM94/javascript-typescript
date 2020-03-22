module.exports = {
    jump: function () {
        return "Jump"
    },
    run: function () {
        return "Run"
    },
    act: function (obstacle, jump, run) {
        return obstacle === "hole" ? jump() : obstacle === "animal" ? run() : "I don't know"
    }
}