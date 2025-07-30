const response = await fetch('api/contacts.json');
const contactsList = await response.json();
renderContactsList(contactsList);

function renderContactsList(contactsList)
{
  const contactsHtmlList = [];
  for(const contact of contactsList)
  {
    contactsHtmlList.push(
      `
      <article class="contact-information__item">
      <div class="contact-information__icon">
        ${contact.icon}
      </div>

      <div class="contact-information__content">
        <h2 class="contact-information__title">${contact.name}</h2>
        <p class="contact-information__description">
          ${contact.description}
        </p>
        <a href="${contact.link}" class="contact-information__link"
          >${contact.linkText}</a
        >
      </div>
    </article>
    `
    );
  }

  const contactsContainer = document.querySelector(".contact-information__list");
  contactsContainer.innerHTML = contactsHtmlList.join("");
}




