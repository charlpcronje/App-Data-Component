// src/app/components/app-data/app-data.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router, NavigationEnd } from '@angular/router';
import { ConsoleProxyService } from '../../services/console-proxy.service';
import { DomTreeService } from '../../services/dom-tree.service';

interface LogEntry {
    message: string;
    source: string;
    type: string;
}

/**
 * 9.1 Make the component available throughout the app.
 */
@Component({
    selector: 'app-data',
    templateUrl: './app-data.component.html',
    styleUrls: ['./app-data.component.scss']
})
export class AppDataComponent implements OnInit {
    isOverlayVisible = false;
    lastKeyPress = 0;
    routes: string[] = [];
    currentRoute: string = '';
    properties: any;
    logs: LogEntry[] = [];
    domTree: any;

    constructor(
        public appService: AppService,
        private router: Router,
        private consoleProxyService: ConsoleProxyService,
        private domTreeService: DomTreeService
    ) { }

    /**
     * 4.1 Display available routes and current route.
     * 3.2 Retrieve sizes from local storage on load.
     */
    ngOnInit() {
        this.logs = this.consoleProxyService.getLogs();
        this.domTree = this.domTreeService.generateDomTree();
        this.routes = this.router.config.map(route => route.path || '');
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = event.urlAfterRedirects;
            }
        });

        this.loadSizes();
        this.properties = this.appService.data('properties');
    }

    /**
     * 9.2 Activate the component by double-tapping the backtick key.
     */
    @HostListener('window:keydown', ['$event'])
    handleKeyDown(event: KeyboardEvent) {
        const currentTime = new Date().getTime();
        if (event.key === '`') {
            if (currentTime - this.lastKeyPress < 300) {
                this.toggleOverlay();
            }
            this.lastKeyPress = currentTime;
        }
    }

    /**
     * 9.2 Toggle the overlay visibility.
     */
    toggleOverlay() {
        this.isOverlayVisible = !this.isOverlayVisible;
    }

    /**
     * 3.2 Save the sizes of resizable bars to local storage.
     */
    saveSizes() {
        const sizes = {
            top: document.querySelector('.top-bar')?.clientHeight,
            middle: document.querySelector('.middle-bar')?.clientHeight,
            bottom: document.querySelector('.bottom-bar')?.clientHeight,
        };
        localStorage.setItem('resizableSizes', JSON.stringify(sizes));
    }

    /**
     * 3.2 Load the sizes of resizable bars from local storage.
     */
    loadSizes() {
        const sizes = JSON.parse(localStorage.getItem('resizableSizes') || '{}');
        if (sizes.top && sizes.middle && sizes.bottom) {
            document.querySelector('.top-bar')?.setAttribute('style', `height: ${sizes.top}px`);
            document.querySelector('.middle-bar')?.setAttribute('style', `height: ${sizes.middle}px`);
            document.querySelector('.bottom-bar')?.setAttribute('style', `height: ${sizes.bottom}px`);
        }
    }

    /**
     * 5.1 Toggle the visibility of the properties tree node.
     * @param node - The tree node to toggle
     */
    toggleNode(node: any) {
        node.expanded = !node.expanded;
    }

    /**
     * 5.2 Display information on value origin and usage.
     * @param node - The tree node to display information for
     */
    showNodeInfo(node: any) {
        console.log('Node Info:', node);
        // Additional logic to display information about where in the code the object got its values from and where it is being used
    }
}
