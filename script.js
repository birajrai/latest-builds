const plugins = [
  { name: "FastLogin", id: "fastlogin" }
];

const pluginList = document.getElementById("plugin-list");

plugins.forEach(plugin => {
  const col = document.createElement("div");
  col.className = "col-sm-12 col-md-6 col-lg-4";

  col.innerHTML = `
    <div class="card plugin-card h-100">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${plugin.name}</h5>
        <p class="card-text">Click below to view the latest build and info.</p>
        <a href="plugins/${plugin.id}/README.md" class="btn btn-success mt-auto" target="_blank">Latest Build</a>
      </div>
    </div>
  `;

  pluginList.appendChild(col);
});
