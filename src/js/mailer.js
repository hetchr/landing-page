export function mailTo() {
  const lastName = document.getElementById("lastNameForm").value;
  const subject = document.getElementById("reasonForm").value;
  const content = document.getElementById("contentForm").value;
  window.open(
    `mailto:hey@hetchr.com?subject=[${lastName}] ${subject}&body=${content}`
  );
}
