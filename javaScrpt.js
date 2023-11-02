/*
<div class="card card-purple">
      <div class="header">
        <div class="author">
          Daniel Clifford
        </div>
        <div class="grad">
          Verified Graduate
        </div>
      </div>
      <div class="description-title">
        I received a job offer mid-course, and the subjects I learned were current, if not more so,
        in the company I joined. I honestly feel I got every penny’s worth.
      </div>
      <div class="description-content">
        “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
        transition and have heard some people who had an amazing experience here. I signed up
        for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
        The next 12 weeks was the best - and most grueling - time of my life. Since completing
        the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
      </div>
    </div> */

function createPost(style, author, verified, title, content)
{
    const cardRoot = document.createElement('div'); 
    cardRoot.classList.add("card"); 
    cardRoot.classList.add(`card-${style}`);
    const cardHeader = document.createElement('div');
    cardHeader.classList.add("header"); 
    cardRoot.appendChild(cardHeader); 
    const cardAuthor = document.createElement('div');
    cardAuthor.classList.add('author');
    cardAuthor.innerText = author; 
    cardHeader.appendChild(cardAuthor); 
    if(verified) {
        const cardVerified = document.createElement('div');
        cardVerified.classList.add("grad"); 
        cardVerified.innerText = "Verified Graduate"; 
        cardHeader.appendChild(cardVerified); 
    }
    const cardTitle = document.createElement('div');
    cardTitle.classList.add("description-title");
    cardTitle.innerText = title; 
    cardRoot.appendChild(cardTitle); 
    const cardContent = document.createElement('div');
    cardContent.classList.add("description-content");
    cardContent.innerText = content; 
    cardRoot.appendChild(cardContent); 
    return cardRoot; 
}

