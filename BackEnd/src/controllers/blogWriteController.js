async function blogWriteControllerMain(req, res, next) {
  res.json({ Welcome: "Write Route!" });
}

async function blogWriteControllerDraft(req, res, next) {
  try {
    res.json({ Route: "Draft Route" });
  } catch (error) {
    throw error;
  }
}

async function blogWriteControllerSave(req, res, next) {
  try {
    res.json({ Route: "Save Route" });
  } catch (error) {
    throw error;
  }
}

async function blogWriteControllerEdit(req, res, next) {
  try {
    res.json({ Route: "Edit Route" });
  } catch (error) {
    throw error;
  }
}

async function blogWriteControllerDelete(req, res, next) {
  try {
    res.json({ Route: "Delete Route" });
  } catch (error) {
    throw error;
  }
}

async function blogWriteControllerPublish(req, res, next) {
  try {
    res.json({ Route: "Publish Route" });
  } catch (error) {
    throw error;
  }
}

async function blogWriteControllerUnpublish(req, res, next) {
  try {
    res.json({ Route: "Unpublish Route" });
  } catch (error) {
    throw error;
  }
}

export {
  blogWriteControllerMain,
  blogWriteControllerDraft,
  blogWriteControllerSave,
  blogWriteControllerEdit,
  blogWriteControllerDelete,
  blogWriteControllerPublish,
  blogWriteControllerUnpublish,
};
