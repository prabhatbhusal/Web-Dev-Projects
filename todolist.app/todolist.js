document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAPJJREFUSEvtllESwiAMRLcnsUfRk2hvpifRm6g3cdaxMxCBDbYj/YBPmuSRJaQZ0GgNjbioAZ8A7MRBnwDOnmS84CuAvScggBuAg7L1gEcAdxXIfCeYB8guD5iZMmOuUkCv3TvQZsCU9Wj04R4Li4uF88jop+wuoa/NOJSr8lqleXRNmwGHx56fkOt5mHylb6m4pHNBXOlbC567V9ihUnurg1MBvXuRQLUZeyE946867FKrBtKLiwp5VVj0jpt1Lvnv+xis3kD+CvbCUnacWKbUh1ID+WW6tIzscKiGPcI5DqlBPpVUNGNZAwVeInPRtxn4BeiHhh8duCnrAAAAAElFTkSuQmCC"/>
                </button>
            </div>
        `;
        document.querySelector('#newtask input').value = "";
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}