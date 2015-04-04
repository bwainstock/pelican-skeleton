Title: Resupply
Date: March 24, 2015
Category: Prep

<style>
table {
	font-size: .8rem;
}

tr[id*="-info"] {
	display: none;
    background-color: #F2F2F2 !important;
}

.info-toggle {
	display: table-row;
}

tbody>tr {
    background-color: #FFFFFF !important;
    border-top: 0px solid #b3b3b3 !important;
    border-bottom: 1px solid #b3b3b3 !important;
}

.subhead {
	text-align: center;
    font-size: 1rem;
  	background-color: #FFFFFF !important;
}

#socal-subhead {
    background-color: #56EEA4 !important;
    border-bottom: 0px !important;
}

#sierra-subhead {
    background-color: #2CBEFF !important;
    border-bottom: 0px !important;
}

#norcal-subhead {
    background-color: #FF7D54 !important;
    border-bottom: 0px !important;
}

#or-subhead {
    background-color: #FF6666 !important;
    border-bottom: 0px !important;   
}

#wa-subhead {
    background-color: #677EFE !important;
    border-bottom: 0px !important;   
}

</style>

<table>
    <thead>
        <tr>
            <th title="Field #1">Section Start</th>
            <th title="Field #2">Section End</th>
            <th title="Field #3">Total Distance</th>
            <th title="Field #4">Section Distance</th>
            <th title="Field #5">Section Days</th>
            <th title="Field #6">Arrival Date</th>
            <th title="Field #7">Departure Date</th>
            <th title="Field #8">Average Distance/day</th>
            <th nowrap id="toggle-all" title="Field #9">Buy or Mail <span class="fa-chevron-down fa"></span></th>
        </tr>
    </thead>
    <tbody>
		<tr class="subhead" id="socal-subhead">
        	<td colspan="9"><h3>Southern California</h3></td>
        </tr>
        <tr class="city ca odd" id="laguna">
            <td>US/Mexico Border</td>
            <td>Mt. Laguna</td>
            <td>42.3</td>
            <td>42.3</td>
            <td>3.0</td>
            <td>4/23/2015</td>
            <td>4/23/2015</td>
            <td>14.7</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="laguna-info">
            <td colspan="3">.4 miles off trail</td>
            <td colspan="3">Small grocery store <br> Open 9AM - 5PM</td>
            <td colspan="3"></td>
        </tr>
        <tr class="mail city ca" id="warner-springs">
            <td>Mt. Laguna</td>
            <td>Warner Springs</td>
            <td>109.6</td>
            <td>67.3</td>
            <td>4.0</td>
            <td>4/27/2015</td>
            <td>4/27/2015</td>
            <td>16.5</td>
            <td>M <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="warner-springs-info">
            <td colspan="3">1.2 miles off trail</td>
            <td colspan="3">Small hiker store at Resource Center <br> (760) 782-0670</td>
            <td colspan="3">General Delivery <br> Warner Springs, CA 92086 <br> M-F 8AM - 4PM S 8AM - 1:30PM</td>
        </tr>
        <tr class="city ca odd" id="idyllwild">
            <td>Warner Springs</td>
            <td>Idyllwild</td>
            <td>178.6</td>
            <td>69.0</td>
            <td>5.0</td>
            <td>5/2/2015</td>
            <td>5/2/2015</td>
            <td>14.4</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="idyllwild-info">
            <td colspan="3">Leave PCT at Saddle Junction <br> Take 2.5 mile side trail <br> Then hitch 2.6 miles</td>
            <td colspan="3">Village Market <br> Fairway Foods</td>
            <td colspan="3"></td>
        </tr>
        <tr class="city ca" id="big-bear">
            <td>Idyllwild</td>
            <td>Big Bear City</td>
            <td>274.1</td>
            <td>95.5</td>
            <td>6.0</td>
            <td>5/9/2015</td>
            <td>5/9/2015</td>
            <td>14.8</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="big-bear-info">
            <td colspan="3">From Hwy 18 <br> 5 mile hitch</td>
            <td colspan="3">Big Bear City Market <br> Vons <br> Stater Brothers</td>
            <td colspan="3"></td>
        </tr>
        <tr class="city ca odd" id="wrightwood">
            <td>Big Bear City</td>
            <td>Wrightwood</td>
            <td>363.6</td>
            <td>89.5</td>
            <td>5.0</td>
            <td>5/13/2015</td>
            <td>5/13/2015</td>
            <td>19.2</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="wrightwood-info">
            <td colspan="3">From Hwy 2 <br> 5 mile hitch</td>
            <td colspan="3">Jensen's Supermarket</td>
            <td colspan="3"></td>
        </tr>
        <tr class="city ca" id="agua-dulce">
            <td>Wrightwood</td>
            <td>Agua Dulce</td>
            <td>454.4</td>
            <td>90.8</td>
            <td>4.0</td>
            <td>5/18/2015</td>
            <td>5/18/2015</td>
            <td>21.8</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="agua-dulce-info">
            <td colspan="3">On trail</td>
            <td colspan="3">Large Market: <br> Sweetwater Farms</td>
            <td colspan="3"></td>
        </tr>
        <tr class="city ca odd" id="mojave">
            <td>Agua Dulce</td>
            <td>Highway 58 (Mojave)</td>
            <td>566.6</td>
            <td>112.2</td>
            <td>5.0</td>
            <td>5/23/2015</td>
            <td>5/23/2015</td>
            <td>22.0</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="mojave-info">
            <td colspan="3">11 mile hitch</td>
            <td colspan="3">Vons Supermarket</td>
            <td colspan="3"></td>
        </tr>
        <tr class="city ca" id="kennedy-meadows">
            <td>Highway 58 (Mojave)</td>
            <td>Kennedy Meadows Store</td>
            <td>702.8</td>
            <td>136.2</td>
            <td>6.0</td>
            <td>5/29/2015</td>
            <td>6/4/2015</td>
            <td>21.9</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="kennedy-meadows-info">
            <td colspan="3">.7 mile off trail</td>
            <td colspan="3"><strong>Leaving trail for wedding. <br> Will resupply at home.</strong></td>
            <td colspan="3"></td>
        </tr>
        <tr class="subhead" id="sierra-subhead">
            <td colspan="9"><h3>Sierras</h3></td>
        </tr>
        <tr class="city ca odd" id="independence">
            <td>Kennedy Meadows Store</td>
            <td>Independence</td>
            <td>790.2</td>
            <td>87.4</td>
            <td>4.0</td>
            <td>6/8/2015</td>
            <td>6/8/2015</td>
            <td>20.8</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="independence-info">
            <td colspan="3">7.5 mile hike over Kearsarge Pass <br> Then 13 mile hitch from trailhead</td>
            <td colspan="3">Decent Chevron supply</td>
            <td colspan="3">General Delivery <br> Independence, CA 93526 <br> M-F 9:30AM - 12:45PM and 1:15PM - 4PM</td>
        </tr>
        <tr class="mail city ca" id="vvr">
            <td>Independence</td>
            <td>Vermillion Valley Resort</td>
            <td>877.2</td>
            <td>87.0</td>
            <td>4.0</td>
            <td>6/12/2015</td>
            <td>6/12/2015</td>
            <td>20.6</td>
            <td>M <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="vvr-info">
            <td colspan="3">1.5 mile side trail <br> Then take ferry across lake</td>
            <td colspan="3"><strong>Package fee $20 with 25 pound limit <br>Must have name and ETA on all sides. <br> UPS ONLY</strong></td>
            <td colspan="3">Vermilion Valley Resort <br> c/o Rancheria Garage <br> 62311 Huntington Lake Road <br> Lakeshore, CA 93634</td>
        </tr>
        <tr class="city ca odd" id="mammoth">
            <td>Vermillion Valley Resort</td>
            <td>Mammoth Lakes</td>
            <td>906.6</td>
            <td>29.4</td>
            <td>1.5</td>
            <td>6/14/2015</td>
            <td>6/14/2015</td>
            <td>21.0</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="mammoth-info">
            <td colspan="3">8 mile bus ride or hitch</td>
            <td colspan="3">Vons Supermarket</td>
            <td colspan="3"></td>
        </tr>
        <tr class="city ca" id="tuolumne">
            <td>Mammoth Lakes</td>
            <td>Tuolumne Meadows</td>
            <td>942.7</td>
            <td>36.1</td>
            <td>1.5</td>
            <td>6/15/2015</td>
            <td>6/15/2015</td>
            <td>21.6</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="tuolumne-info">
            <td colspan="3">.2 mile off trail</td>
            <td colspan="3">Tuolumne Store<br> 9AM - 8PM</td>
            <td colspan="3"></td>
        </tr>
        <tr class="city ca odd" id="bridgeport">
            <td>Tuolumne Meadows</td>
            <td>Bridgeport</td>
            <td>1018.3</td>
            <td>75.6</td>
            <td>3.5</td>
            <td>6/19/2015</td>
            <td>6/19/2015</td>
            <td>20.8</td>
            <td>B? <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="bridgeport-info">
            <td colspan="3">30 mile hitch on Hwy 108 East then Hwy 395 South</td>
            <td colspan="3">Bridgeport General Store</td>
            <td colspan="3"></td>
        </tr>
        <tr class="city ca" id="tahoe">
            <td>Bridgeport</td>
            <td>South Lake Tahoe</td>
            <td>1093.0</td>
            <td>74.7</td>
            <td>3.0</td>
            <td>6/22/2015</td>
            <td>6/22/2015</td>
            <td>20.3</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="tahoe-info">
            <td colspan="3">9 mile hitch from Hwy 50</td>
            <td colspan="3">Raley's Supermarket<br> Safeway</td>
            <td colspan="3"></td>
        </tr>
        <tr class="city ca odd" id="sierra-city">
            <td>South Lake Tahoe</td>
            <td>Sierra City</td>
            <td>1197.6</td>
            <td>104.6</td>
            <td>5.0</td>
            <td>6/27/2015</td>
            <td>6/27/2015</td>
            <td>22.1</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="sierra-city-info">
            <td colspan="3">1.5 mile hitch or walk on Hwy 49</td>
            <td colspan="3">Good resupply at <br> Country Store Grocery</td>
            <td colspan="3"></td>
        </tr>
        <tr class="subhead" id="norcal-subhead">
            <td colspan="9"><h3>Northern California</h3></td>
        </tr>
        <tr class="mail city ca" id="belden">
            <td>Sierra City</td>
            <td>Belden</td>
            <td>1289.2</td>
            <td>91.6</td>
            <td>4.0</td>
            <td>7/1/2015</td>
            <td>7/1/2015</td>
            <td>21.8</td>
            <td>M <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="belden-info">
            <td colspan="3">1 mile off trail to <br> The Brattens at Little Haven</td>
            <td colspan="3"></td>
            <td colspan="3">c/o The Braatens at Little Haven <br> PO Box 4 <br> Belden, CA 95915</td>
        </tr>
        <tr class="mail city ca odd" id="old-station">
            <td>Belden</td>
            <td>Old Station</td>
            <td>1377.7</td>
            <td>88.5</td>
            <td>4.0</td>
            <td>7/5/2015</td>
            <td>7/5/2015</td>
            <td>21.8</td>
            <td nowrap>B/M <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="old-station-info">
            <td colspan="3">.3 miles off trail</td>
            <td colspan="3">Hat Creek Store (limited)</td>
            <td colspan="3">General Delivery <br> Old Station, CA 96071 <br> M-F 8:30AM - 4:30PM S 1PM - 3PM</td>
        </tr>
        <tr class="mail city ca" id="burney-falls">
            <td>Old Station</td>
            <td>Burney Falls SP</td>
            <td>1423.6</td>
            <td>45.9</td>
            <td>2.0</td>
            <td>7/7/2015</td>
            <td>7/7/2015</td>
            <td>24.0</td>
            <td>M <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="burney-falls-info">
            <td colspan="3">On trail</td>
            <td colspan="3">Limited snacks at park store <br> <strong>$5 fee for packages <br> UPS ONLY </strong></td>
            <td colspan="3">c/o Burney Park Camp Store <br> McArthur Burney Falls State Park <br> 24900 State Highway 89 <br> Burney, CA 96013</td>
        </tr>
        <tr class="city ca odd" id="shasta">
            <td>Burney Falls SP</td>
            <td>Mt. Shasta City</td>
            <td>1506.5</td>
            <td>82.9</td>
            <td>4.0</td>
            <td>7/11/2015</td>
            <td>7/11/2015</td>
            <td>22.3</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="shasta-info">
            <td colspan="3">15 mile hitch on I5</td>
            <td colspan="3">Ray's Food Place Supermarket</td>
            <td colspan="3"></td>
        </tr>
        <tr class="city ca" id="etna">
            <td>Mt. Shasta City</td>
            <td>Etna</td>
            <td>1606.3</td>
            <td>99.8</td>
            <td>4.5</td>
            <td>7/16/2015</td>
            <td>7/16/2015</td>
            <td>21.9</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="etna-info">
            <td colspan="3">10 mile hitch on Sawyers Bar Road from Etna Summit</td>
            <td colspan="3">Ray's Food Place Supermarket</td>
            <td colspan="3"></td>
        </tr>
        <tr class="city ca odd" id="seiad">
            <td>Etna</td>
            <td>Seiad Valley</td>
            <td>1662.1</td>
            <td>55.8</td>
            <td>2.5</td>
            <td>7/18/2015</td>
            <td>7/18/2015</td>
            <td>22.9</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="seiad-info">
            <td colspan="3">On trail</td>
            <td colspan="3">Seiad Valley Store <br> Large convenience store <br> 6AM - 8PM</td>
            <td colspan="3"></td>
        </tr>
        <tr class="city ca" id="ashland">
            <td>Seiad Valley</td>
            <td>Ashland</td>
            <td>1726.6</td>
            <td>64.5</td>
            <td>3.0</td>
            <td>7/21/2015</td>
            <td>7/21/2015</td>
            <td>20.9</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="ashland-info">
            <td colspan="3">13 mile hitch on Hwy 99 and I5</td>
            <td colspan="3">Safeway <br> Albertson's</td>
            <td colspan="3"></td>
        </tr>
        <tr class="subhead" id="or-subhead">
            <td colspan="9"><h3>Oregon</h3></td>
        </tr>
        <tr class="mail city or odd" id="crater-lake">
            <td>Ashland</td>
            <td>Crater Lake (Mazama Village)</td>
            <td>1830.4</td>
            <td>103.8</td>
            <td>4.5</td>
            <td>7/26/2015</td>
            <td>7/26/2015</td>
            <td>22.5</td>
            <td>M <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="crater-lake-info">
            <td colspan="3">1.3 mile walk</td>
            <td colspan="3"><strong>Store accepts USPS or UPS <br> 7AM - 9PM</strong></td>
            <td colspan="3">c/o Crater Lake Mazama Camp Store <br> Mazama Village <br> Crater Lake, OR 97604</td>
        </tr>
        <tr class="mail city or" id="shelter-cove">
            <td>Crater Lake (Mazama Village)</td>
            <td>Shelter Cove Resort</td>
            <td>1912.2</td>
            <td>81.8</td>
            <td>3.5</td>
            <td>7/29/2015</td>
            <td>7/29/2015</td>
            <td>22.6</td>
            <td>M <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="shelter-cove-info">
            <td colspan="3">1.4 mile walk</td>
            <td colspan="3"><strong>UPS ONLY <br> SUN-TH 6:30AM - 7PM <br> F-S 6:30AM - 8PM</strong></td>
            <td colspan="3">c/o Shelter Cove Resort <br> 27600 West Odell Lake Rd. <br> Crescent, OR 97733</td>
        </tr>
        <tr class="mail city or odd" id="elk-lake">
            <td>Shelter Cove Resort</td>
            <td>Elk Lake Resort</td>
            <td>1958.3</td>
            <td>46.1</td>
            <td>2.0</td>
            <td>7/31/2015</td>
            <td>7/31/2015</td>
            <td>22.8</td>
            <td>M <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="elk-lake-info">
            <td colspan="3">1 mile side trail</td>
            <td colspan="3"><strong>UPS or FEDEX ONLY <br> $5 fee <br> 9AM - 8PM</strong></td>
            <td colspan="3">c/o Elk Lake Resort <br> 60000 Cascade Lakes Hwy <br> Bend, OR 97701</td>
        </tr>
        <tr class="mail city or" id="blyc">
            <td>Elk Lake Resort</td>
            <td>Big Lake Youth Camp</td>
            <td>2000.9</td>
            <td>42.6</td>
            <td>2.0</td>
            <td>8/2/2015</td>
            <td>8/2/2015</td>
            <td>22.6</td>
            <td>M <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="blyc-info">
            <td colspan="3">.7 miles off trail</td>
            <td colspan="3"><strong>Accepts USPS and UPS</strong></td>
            <td colspan="3">c/o Big Lake Youth Camp <br> 13100 Highway 20 <br> Sisters, OR 97759</td>
        </tr>
        <tr class="mail city or odd" id="timberline">
            <td>Big Lake Youth Camp</td>
            <td>Timberline Lodge</td>
            <td>2107.3</td>
            <td>106.4</td>
            <td>5.0</td>
            <td>8/7/2015</td>
            <td>8/7/2015</td>
            <td>22.1</td>
            <td>M <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="timberline-info">
            <td colspan="3">On trail</td>
            <td colspan="3"><strong>$5 fee <br> "Hold for PCT Hiker" must be on box</strong></td>
            <td colspan="3">c/o Timberline Lodge Ski Area<br> 27500 E. Timberline Rd. <br> WY'East Store <br> Timberline Lodge, OR 97028</td>
        </tr>
        <tr class="city or" id="cascade-locks">
            <td>Timberline Lodge</td>
            <td>Cascade Locks</td>
            <td>2155.1</td>
            <td>47.8</td>
            <td>2.0</td>
            <td>8/9/2015</td>
            <td>8/9/2015</td>
            <td>22.6</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="cascade-locks-info">
            <td colspan="3">On trail</td>
            <td colspan="3">Columbia Grocery</td>
            <td colspan="3"></td>
        </tr>
        <tr class="subhead" id="wa-subhead">
            <td colspan="9"><h3>Washington</h3></td>
        </tr>
        <tr class="mail city wa odd" id="white-pass">
            <td>Cascade Locks</td>
            <td>White Pass</td>
            <td>2302.8</td>
            <td>147.7</td>
            <td>7.0</td>
            <td>8/16/2015</td>
            <td>8/16/2015</td>
            <td>21.3</td>
            <td>M <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="white-pass-info">
            <td colspan="3">.7 miles off trail</td>
            <td colspan="3"></td>
            <td colspan="3">c/o White Pass Rural Branch PO <br> at the Kracker Barrel Store <br> 48851 US Highway 12 <br> Naches, WA 98937</td>
        </tr>
        <tr class="mail city wa" id="snoqualmie">
            <td>White Pass</td>
            <td>Snoqualmie Pass</td>
            <td>2401.8</td>
            <td>99.0</td>
            <td>4.5</td>
            <td>8/20/2015</td>
            <td>8/20/2015</td>
            <td>22.4</td>
            <td>M <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="snoqualmie-info">
            <td colspan="3">.3 miles off trail</td>
            <td colspan="3">Chevron accepts packages, no charge</td>
            <td colspan="3">General Delivery <br> c/o Chevron Station <br> Snoqualmie Pass, WA 98068</td>
        </tr>
        <tr class="mail city wa odd" id="skykomish">
            <td>Snoqualmie Pass</td>
            <td>Skykomish</td>
            <td>2476.3</td>
            <td>74.5</td>
            <td>3.5</td>
            <td>8/24/2015</td>
            <td>8/24/2015</td>
            <td>20.4</td>
            <td>M <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="skykomish-info">
            <td colspan="3">16 mile hitch from Stevens Pass on Hwy 2</td>
            <td colspan="3"></td>
            <td colspan="3">General Delivery <br> Skykomish, WA 98288 <br> M-F 8AM - 11:30AM and 12M-3:45PM</td>
        </tr>
        <tr class="mail city wa" id="stehekin">
            <td>Skykomish</td>
            <td>Stehekin</td>
            <td>2574.1</td>
            <td>97.8</td>
            <td>5.0</td>
            <td>8/29/2015</td>
            <td>8/29/2015</td>
            <td>20.6</td>
            <td>M <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="stehekin-info">
            <td colspan="3">11 mile bus ride</td>
            <td colspan="3"></td>
            <td colspan="3">General Delivery <br> Stehekin, WA 98852 <br> M-F 10AM - 4PM S 11AM - 1PM</td>
        </tr>
        <tr class="mail city wa odd" id="manning">
            <td>Stehekin</td>
            <td>Manning Park</td>
            <td>2663.5</td>
            <td>89.4</td>
            <td>4.0</td>
            <td>9/2/2015</td>
            <td>9/2/2015</td>
            <td>21.1</td>
            <td>B <span class="fa-chevron-down fa"></span></td>
        </tr>
        <tr id="manning-info">
            <td colspan="3">.9 miles off trail</td>
            <td colspan="3">Conveniance store at Lodge</td>
            <td colspan="3"></td>
        </tr>
    </tbody>
</table>
<script>
$( ".city" ).click(function() {
  $( this ).next().toggle();
});

$( "#toggle-all" ).click(function() {
    $( ".city" ).next().toggle();
});
</script>