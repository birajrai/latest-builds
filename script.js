const plugins = [
  {
    name: "FastLogin",
    source: "https://github.com/games647/FastLogin",
    version: "1.12-SNAPSHOT",
    jar: "FastLogin-1.12-SNAPSHOT.jar"
  },
  {
    name: "SomePlugin",
    source: "https://github.com/example/SomePlugin",
    version: "2.0.0",
    jar: "SomePlugin-2.0.0.jar"
  }
  // Add more plugins here
];

const tableBody = document.getElementById("pluginTableBody");

plugins.forEach(plugin => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${plugin.name}</td>
    <td><a href="${plugin.source}" target="_blank">GitHub</a></td>
    <td>${plugin.version}</td>
    <td><a href="builds/${plugin.jar}" class="btn btn-success btn-sm" download>Download</a></td>
  `;
  tableBody.appendChild(row);
});
