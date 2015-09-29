// Isolate the logic to load the blog posts into a module.

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import xmlToJSON from 'metatribal/xmlToJSON';
import _ from 'lodash';
import 'fetch';

function rssToArticleList(rss) {
  let asJson = xmlToJSON.parseString(rss);
  let items = asJson.rss[0].channel[0].item;
  return _.map(items, item =>  { return { title: item.title[0]._text, url: item.link[0]._text } });
}

@inject(HttpClient)
export class Blog {
  constructor(http) {
    this.http = http;
  }

  load() {
    return this.http.fetch('/feed.xml')
      .then(response => response.text())
	    .then(rssToArticleList);
	  ;
  }
}
