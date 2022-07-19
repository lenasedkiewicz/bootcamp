{
  ('use strict');

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    //   console.log("Link was clicked!");
    //   console.log(event);

    /* remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    //   console.log("clickedElement:", clickedElement);

    /* remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('article.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    // console.log(articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    // console.log(targetArticle);

    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
  };

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  const generateTitleLinks = function () {
    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    const clearList = function () {
      titleList.innerHTML = '';
    };
    clearList();
    /* find all the articles and save them to variable: articles */

    const articles = document.querySelectorAll(optArticleSelector);

    let html = '';
    for (let article of articles) {
      /* get the article id */
      const articleId = article.getAttribute('id');
      /* find the title element and get the title from the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      /* create HTML of the link */
      const linkHTML =
        '<li><a href="#' +
        articleId +
        '"><span>' +
        articleTitle +
        '</span></a></li>';
      // console.log(linkHTML);
      /* insert link into html variable */
      html = html + linkHTML;
    }
    // console.log(html)
    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  };

  generateTitleLinks();

  const generateTags = function (){
    /* find all articles */

    /* START LOOP: for every article: */

    /* find tags wrapper */

    /* make html variable with empty string */

    /* get tags from data-tags attribute */

    /* split tags into array */

    /* START LOOP: for each tag */

    /* generate HTML of the link */

    /* add generated code to html variable */

    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

    /* END LOOP: for every article: */
  };

  generateTags();
}
