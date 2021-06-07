import algoliasearch from "algoliasearch";
import { app_variables } from "@/access";

export const findPackage = async function (options) {
  const client = algoliasearch(app_variables.app_id, app_variables.api_key);
  const index = client.initIndex(app_variables.index_name);
  let data = null;
  let requestOptions = {
    page: options.page,
    hitsPerPage: options.hitsPerPage,
    attributesToHighlight: [],
    attributesToRetrieve: [
      "deprecated",
      "description",
      "githubRepo",
      "homepage",
      "keywords",
      "license",
      "name",
      "owner",
      "version",
    ],
    analyticsTags: ["jsdelivr"],
  };
  try {
    await index
      .search(options.value, requestOptions)
      .then((resp) => {
        data = resp;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  } catch (e) {
    console.error(e);
    throw e;
  }
  return data;
};
