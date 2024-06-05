// src/app/services/dom-tree.service.ts
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DomTreeService {
    constructor() { }

    /**
     * Traverse the DOM and generate a tree structure.
     */
    generateDomTree(element: HTMLElement = document.body): any {
        return {
            tagName: element.tagName,
            children: Array.from(element.children).map(child => this.generateDomTree(child as HTMLElement)),
            hidden: element.hidden,
            loading: element.getAttribute('loading') === 'lazy', // Example for loading state
            failed: element.getAttribute('data-failed') === 'true', // Example for failed state
            styles: {
                color: element.hidden ? 'gray' : element.getAttribute('loading') === 'lazy' ? 'blue' : element.getAttribute('data-failed') === 'true' ? 'red' : 'black'
            }
        };
    }
}
