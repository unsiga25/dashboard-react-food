import LineChart from  '../cards/Chartdash'

const GroceryChart = () => {
  return (
           <>
          <div class="card h-100">
        <div class="card-header">
        <span class="me-2"><i class="bi bi-bar-chart-fill"></i></span>
                Area Chart Example
               
           </div>
           <LineChart/>
           </div>
          </>
      );
};

export default GroceryChart;      