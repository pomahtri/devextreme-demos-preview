import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxChartModule } from 'devextreme-angular';

import { Population, Service } from './app.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [Service]
})
export class AppComponent {
    populationData: Population[];

    constructor(service: Service) {
        this.populationData = service.getPopulationData();
    }

    customizeItems(items) {
        var sortedItems = [];

        items.forEach(function(item) {
            var startIndex = item.series.stack === "male" ? 0 : 3;
            sortedItems.splice(startIndex, 0, item);
        });
        return sortedItems;
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxChartModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);