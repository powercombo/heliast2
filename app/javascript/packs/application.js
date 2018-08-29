import "bootstrap";
import $ from "jquery"
import '../components/category_choice';


$("[data-form-prepend]").click(function(e) {
  var obj = $($(this).attr("data-form-prepend"));
  obj.find("input, select, textarea").each(function() {
    $(this).attr("name", function() {
      return $(this)
        .attr("name")
        .replace("new_record", new Date().getTime());
    });
  });
  obj.insertBefore(this);
  return false;
});

// click on choose file when clicking on the camera icon

const pictureIcons = document.querySelectorAll(".fa-camera");
  pictureIcons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    const index = event.currentTarget.dataset.index;
    console.log(document.getElementById(`question_options_attributes_${index}_photo`));
    document.getElementById(`question_options_attributes_${index}_photo`).click();
  });
});

const deleteIcons = document.querySelectorAll(".fa-trash");
  deleteIcons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    const index = event.currentTarget.dataset.trash;
    console.log(document.getElementById(`question_options_attributes_${index}_photo`));
    document.getElementById(`question_options_attributes_${index}__destroy`).click();
  });
});

// remove-option

const deleteButtons = document.querySelectorAll(".remove");
deleteButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const index = event.currentTarget.dataset.index;
    document.getElementById(`option_fields_${index}`).style.display = "none";
  });
});

// Prepopulate-answer when clicking on an option

const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.addEventListener("click", (event) => {
      const optionid = event.currentTarget.dataset.optionid;
      document.getElementById("answer_option_id").value = `${optionid}`;
      const checks = document.querySelectorAll(".fa-check");
      checks.forEach((check) => {
        console.log(check)
        check.classList.add("hidden");
      })
    const check = document.querySelector(`.option${optionid} .fa-check`);
    check.classList.remove("hidden");
  })
});


