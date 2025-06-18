let viz;

const chartLinks = {
  BarChart: 'https://public.tableau.com/views/BarChart_17492947100730/BarChart?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  LineChart: 'https://public.tableau.com/views/LineChart_17492947949660/LineChart?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  PieChart: 'https://public.tableau.com/views/PieChart_17492948382900/PieChart?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  MapChart: 'https://public.tableau.com/views/Maps_17492948542880/Map?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  ScatterPlot: 'https://public.tableau.com/views/ScatterPlot_17492949511950/ScatterPlot?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  BubbleChart: 'https://public.tableau.com/views/BubbleChart_17492950392150/BubbleChart?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  TreeMap: 'https://public.tableau.com/views/TreeMap_17495410401030/TreeMap?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  GanttChart: 'https://public.tableau.com/views/GanttChart_17492949765650/GANTTCHART?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  LollipopChart: 'https://public.tableau.com/views/LollypopChart_17495410712910/LollypopChart?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  WordCloud: 'https://public.tableau.com/views/WordCloud_17495410985160/WordCloud?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  BoxPlot: 'https://public.tableau.com/views/BoxPlot_17495411473170/BoxPlot?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  Histogram: 'https://public.tableau.com/views/HistogramBar_17495411210000/HistogramBar?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  SampleSuperstore: 'https://public.tableau.com/views/Dashboard_17492892599050/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
};

function loadViz(chartName) {
  const container = document.getElementById("vizContainer");
  const url = chartLinks[chartName];
  const title = document.getElementById("chartTitle");

  title.innerText = chartName.replace(/([A-Z])/g, ' $1').trim();

  if (viz) {
    viz.dispose();
  }

  const options = {
    width: "100%",
    height: "600px",
    hideToolbar: false,
    hideTabs: true
  };
  viz = new tableau.Viz(container, url, options);
}
