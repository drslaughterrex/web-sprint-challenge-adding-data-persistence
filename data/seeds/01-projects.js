exports.seed = function (knex) {
	return knex("projects")
		.del()
		.then(function () {
			return knex("projects").insert([
				{
					project_id: 1,
					project_name: "Complete Sprint Challenge",
					project_description: "",
					project_completed: false,
				},
				{
					project_id: 2,
					project_name: "Create Router Files",
					project_description: "Add routers to projects, resources, and tasks",
					project_completed: true,
				},
				{
					project_id: 3,
					project_name: "Stretch Goals",
					project_description:
						"Add endpoints to get list of project resources, project tasks, and see all projects using particular resource",
					project_completed: false,
				},
			]);
		});
};
