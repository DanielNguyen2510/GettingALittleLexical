class GameOfLife {
    constructor() {

        this.cell_size = 5;
        this.dead_color = `#181818`;
        this.alive_color = `#FF756B`;
        this.total_row = Math.floor((canvas.width / this.cell_size));
        this.total_cell = Math.floor((canvas.width / this.cell_size) * (canvas.height / this.cell_size));
        this.active_array = [];
        this.inactive_array = [];

        this.arrayInitialization = () => {

            for (let i = 0; i < this.total_cell; i++) {
                this.active_array[i] = [];
                // for (let j = 0; j < this.cells_in_column; j++) {
                //  this.active_array[i][j] = 0;
                //}
            }
            this.inactive_array = this.active_array;

        };

        this.arrayRandomize = () => {

            for (let i = 0; i < this.total_cell; i++) {
                //for (let j = 0; j < this.cells_in_column; j++) {
                    this.active_array[i]= (Math.random() > 0.5) ? 1 : 0;
                }
            

        };

        this.fillArray = () => {

            for (let i = 0; i < this.total_cell; i++) {
               
                    let color;
                    if (this.active_array[i] == 1)
                        color = this.alive_color;
                    else
                        color = this.dead_color;
                    ctx.fillStyle = color;
                    ctx.fillRect(  i % canvas.width * this.cell_size , i / canvas.width * this.cell_size , this.cell_size, this.cell_size);
                
            }


        };

        this.setCellValueHelper = (i) => {
            try {
                return this.active_array[i];
            }
            catch {
                return 0;
            }
        };

        this.countNeighbours = (i) => {
            let total_neighbours = 0;
            total_neighbours += this.setCellValueHelper(i-1);
            total_neighbours += this.setCellValueHelper(i-this.total_row-1);
            total_neighbours += this.setCellValueHelper(i-this.total_row);
            total_neighbours += this.setCellValueHelper(i-this.total_row+1);
            total_neighbours += this.setCellValueHelper(i+1);
            total_neighbours += this.setCellValueHelper(i+this.total_row-1);
            total_neighbours += this.setCellValueHelper(i+this.total_row);
            total_neighbours += this.setCellValueHelper(i+this.total_row + 1);
            return total_neighbours;
        };

        this.updateCellValue = (i) => {

            const total = this.countNeighbours(i);
            // cell with more than 4 or less then 3 neighbours dies. 1 => 0; 0 => 0
            if (total > 4 || total < 3) {
                return 0;
            }
            // dead cell with 3 neighbours becomes alive. 0 => 1
            else if (this.active_array[i] === 0 && total === 3) {
                return 1;
            }
            // or returning its status back. 0 => 0; 1 => 1
            else {
                return this.active_array[i];
            }

        };
        
        this.updateLifeCycle = () => {

            for (let i = 0; i < this.total_cell; i++) {
               
                    let new_state = this.updateCellValue(i);
                    this.inactive_array[i] = new_state;
                }
            
            this.active_array = this.inactive_array

        };

        this.gameSetUp = () => {
            this.arrayInitialization();
        };

        this.runGame = () => {
            this.updateLifeCycle();
            this.fillArray();
        };
        
    }
}
