const socket = io.connect("http://localhost:3000");

$(".column").on("click", function() {
    const colNumber = this.getAttribute("col-number");
    socket.emit("colNumber",{
        colNumber:colNumber
    });
})



