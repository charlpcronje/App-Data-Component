// dynamic-loader.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { DocumentListComponent } from '../document-list/document-list.component';
import { VideoListComponent } from '../video-list/video-list.component';

@Component({
    selector: 'app-dynamic-loader',
    templateUrl: './dynamic-loader.component.html',
    styleUrls: ['./dynamic-loader.component.scss']
})
export class DynamicLoaderComponent implements OnInit {
    component: any;
    @Input() data: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        
        this.route.data.subscribe(data => {
            console.log("this.data", this.data);
            this.data = data;
            const moduleType = data['moduleType'];
            switch (moduleType) {
                case 'list':
                    this.component = ListComponent;
                    break;
                case 'document-list':
                    this.component = DocumentListComponent;
                    break;
                case 'video-list':
                    this.component = VideoListComponent;
                    break;
                default:
                    this.component = ListComponent;
            }
        });
    }
}