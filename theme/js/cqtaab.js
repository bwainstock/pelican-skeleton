
listReport = function() {
    var $list = $("#cqtaab"),
        $categories,
        $chartContainer,
        chart = null,
        externalId = "cqtaab",
        renderedTemplate = "%3Cdiv%20class%3D%22lpList%20lp%22%3E%09%3Clink%20href%3D%22http%3A%2F%2Flighterpack.com%2Fcommon.css%22%20rel%3D%22stylesheet%22%20type%3D%22text%2Fcss%22%20%2F%3E%20%20%20%20%3Ch2%20class%3D%22lpListName%22%20%3EUpdated%20PCT%20-%201%26%23x2F%3B12%26%23x2F%3B15%3C%2Fh2%3E%20%20%20%20%3Cdiv%20class%3D%22lpHalf%20lpAlignRight%22%3E%20%20%20%20%20%20%20%20%3Ccanvas%20class%3D%22lpChart%22%20height%3D%22260%22%20width%3D%22260%22%3E%3C%2Fcanvas%3E%20%20%20%20%3C%2Fdiv%3E%20%20%20%20%3Cdiv%20class%3D%22lpHalf%20lpAlignLeft%22%3E%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22lpTable%22%20style%3D%22height%3A260px%3B%22%3E%3Cdiv%20class%3D%22lpRow%22%3E%3Cdiv%20class%3D%22lpCell%20lpMiddle%22%3E%0A%20%20%20%20%3Cul%20class%3D%22lpTotals%20lpTable%20lpDataTable%22%3E%0A%20%20%20%20%20%20%20%20%3Cli%20class%3D%22lpRow%20lpHeader%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%22%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Category%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Weight%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22lpTotalCategory%20lpRow%22%20id%3D%22total_306%22%20category%3D%22306%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpLegendCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpLegend%22%20style%3D%22background-color%3A%20rgb(27%2C119%2C211)%22%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Big%20%26quot%3BThree%26quot%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpNumber%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22lpSubtotal%22%3E%3Cspan%20class%3D%22lpDisplaySubtotal%22%20%20mg%3D%223336736.15%22%3E7.36%3C%2Fspan%3E%20%3Cspan%20class%3D%22lpSubtotalUnit%22%3Elb%3C%2Fspan%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22lpTotalCategory%20lpRow%22%20id%3D%22total_319%22%20category%3D%22319%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpLegendCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpLegend%22%20style%3D%22background-color%3A%20rgb(206%2C24%2C54)%22%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Hydration%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpNumber%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22lpSubtotal%22%3E%3Cspan%20class%3D%22lpDisplaySubtotal%22%20%20mg%3D%22464931.80000000005%22%3E1.03%3C%2Fspan%3E%20%3Cspan%20class%3D%22lpSubtotalUnit%22%3Elb%3C%2Fspan%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22lpTotalCategory%20lpRow%22%20id%3D%22total_325%22%20category%3D%22325%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpLegendCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpLegend%22%20style%3D%22background-color%3A%20rgb(242%2C208%2C0)%22%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Kitchen%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpNumber%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22lpSubtotal%22%3E%3Cspan%20class%3D%22lpDisplaySubtotal%22%20%20mg%3D%22328854.2%22%3E0.73%3C%2Fspan%3E%20%3Cspan%20class%3D%22lpSubtotalUnit%22%3Elb%3C%2Fspan%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22lpTotalCategory%20lpRow%22%20id%3D%22total_328%22%20category%3D%22328%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpLegendCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpLegend%22%20style%3D%22background-color%3A%20rgb(122%2C179%2C23)%22%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Toiletries%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpNumber%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22lpSubtotal%22%3E%3Cspan%20class%3D%22lpDisplaySubtotal%22%20%20mg%3D%22343028.95%22%3E0.76%3C%2Fspan%3E%20%3Cspan%20class%3D%22lpSubtotalUnit%22%3Elb%3C%2Fspan%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22lpTotalCategory%20lpRow%22%20id%3D%22total_336%22%20category%3D%22336%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpLegendCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpLegend%22%20style%3D%22background-color%3A%20rgb(130%2C33%2C198)%22%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Electronics%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpNumber%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22lpSubtotal%22%3E%3Cspan%20class%3D%22lpDisplaySubtotal%22%20%20mg%3D%22635028.7999999999%22%3E1.4%3C%2Fspan%3E%20%3Cspan%20class%3D%22lpSubtotalUnit%22%3Elb%3C%2Fspan%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22lpTotalCategory%20lpRow%22%20id%3D%22total_344%22%20category%3D%22344%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpLegendCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpLegend%22%20style%3D%22background-color%3A%20rgb(232%2C110%2C28)%22%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Misc%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpNumber%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22lpSubtotal%22%3E%3Cspan%20class%3D%22lpDisplaySubtotal%22%20%20mg%3D%22561320.1%22%3E1.24%3C%2Fspan%3E%20%3Cspan%20class%3D%22lpSubtotalUnit%22%3Elb%3C%2Fspan%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22lpTotalCategory%20lpRow%22%20id%3D%22total_352%22%20category%3D%22352%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpLegendCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpLegend%22%20style%3D%22background-color%3A%20rgb(220%2C242%2C51)%22%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Clothing%20(Packed)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpNumber%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22lpSubtotal%22%3E%3Cspan%20class%3D%22lpDisplaySubtotal%22%20%20mg%3D%221133980%22%3E2.5%3C%2Fspan%3E%20%3Cspan%20class%3D%22lpSubtotalUnit%22%3Elb%3C%2Fspan%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22lpTotalCategory%20lpRow%22%20id%3D%22total_360%22%20category%3D%22360%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpLegendCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpLegend%22%20style%3D%22background-color%3A%20rgb(86%2C174%2C226)%22%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Clothing%20(Worn)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpNumber%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22lpSubtotal%22%3E%3Cspan%20class%3D%22lpDisplaySubtotal%22%20%20mg%3D%220%22%3E0%3C%2Fspan%3E%20%3Cspan%20class%3D%22lpSubtotalUnit%22%3Elb%3C%2Fspan%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%3Cli%20class%3D%22lpRow%20lpFooter%20lpTotal%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%22%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpSubtotal%22%20title%3D%2260%20items%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Total%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpCell%20lpNumber%20lpSubtotal%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpTotalValue%22%20title%3D%2260%20items%22%3E15%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22lpTotalUnit%22%3E%3Cdiv%20class%3D%22lpUnitSelect%22%3E%0A%20%20%20%20%3Cselect%20class%3D%22lpUnit%20lpInvisible%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Coption%20value%3D%22oz%22%20%3Eoz%3C%2Foption%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Coption%20value%3D%22lb%22%20selected%3Elb%3C%2Foption%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Coption%20value%3D%22g%22%20%3Eg%3C%2Foption%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Coption%20value%3D%22kg%22%20%3Ekg%3C%2Foption%3E%0A%20%20%20%20%3C%2Fselect%3E%0A%0A%20%20%20%20%3C!--%3Cinput%20type%3D%22hidden%22%20class%3D%22lpUnit%22%20value%3D%22lb%22%2F%3E--%3E%0A%20%20%20%20%09%3Cinput%20type%3D%22hidden%22%20class%3D%22lpMG%22%20value%3D%226803880%22%2F%3E%0A%20%20%20%20%3Cspan%20class%3D%22lpDisplay%22%3Elb%3C%2Fspan%3E%0A%20%20%20%20%3Ci%20class%3D%22lpSprite%20lpExpand%22%3E%3C%2Fi%3E%0A%20%20%20%20%3Cul%20class%3D%22lpUnitDropdown%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22oz%22%3Eoz%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22lb%22%3Elb%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22g%22%3Eg%3C%2Fli%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%20class%3D%22kg%22%3Ekg%3C%2Fli%3E%0A%20%20%20%20%3C%2Ful%3E%0A%3C%2Fdiv%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3C%2Fli%3E%0A%0A%20%20%20%20%3C%2Ful%3E%0A%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%20%20%20%20%3C%2Fdiv%3E%20%20%20%20%3Cdiv%20style%3D%22clear%3Aboth%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22lpDialog%22%20id%3D%22lpImageDialog%22%3E%3C%2Fdiv%3E%3Cdiv%20id%3D%22lpModalOverlay%22%3E%3C%2Fdiv%3E",
        chartData = "%7B%22points%22%3A%7B%220%22%3A%7B%22points%22%3A%7B%220%22%3A%7B%22value%22%3A992232.5%2C%22id%22%3A307%2C%22name%22%3A%22Backpack%22%2C%22color%22%3A%7B%22r%22%3A27%2C%22g%22%3A119%2C%22b%22%3A211%7D%2C%22percent%22%3A0.29736618521665253%7D%2C%221%22%3A%7B%22value%22%3A1048931.5%2C%22id%22%3A311%2C%22name%22%3A%22Tent%22%2C%22color%22%3A%7B%22r%22%3A47%2C%22g%22%3A132%2C%22b%22%3A216%7D%2C%22percent%22%3A0.3143585386576041%7D%2C%222%22%3A%7B%22value%22%3A170097%2C%22id%22%3A312%2C%22name%22%3A%22Ground%20Cloth%22%2C%22color%22%3A%7B%22r%22%3A65%2C%22g%22%3A142%2C%22b%22%3A219%7D%2C%22percent%22%3A0.05097706032285472%7D%2C%223%22%3A%7B%22value%22%3A586834.65%2C%22id%22%3A313%2C%22name%22%3A%22Quilt%22%2C%22color%22%3A%7B%22r%22%3A87%2C%22g%22%3A155%2C%22b%22%3A224%7D%2C%22percent%22%3A0.17587085811384878%7D%2C%224%22%3A%7B%22value%22%3A28349.5%2C%22id%22%3A318%2C%22name%22%3A%22Stuff%20Sack%22%2C%22color%22%3A%7B%22r%22%3A110%2C%22g%22%3A169%2C%22b%22%3A229%7D%2C%22percent%22%3A0.008496176720475786%7D%2C%225%22%3A%7B%22value%22%3A453592%2C%22id%22%3A314%2C%22name%22%3A%22Sleeping%20Pad%22%2C%22color%22%3A%7B%22r%22%3A133%2C%22g%22%3A184%2C%22b%22%3A234%7D%2C%22percent%22%3A0.13593882752761258%7D%2C%226%22%3A%7B%22value%22%3A56699%2C%22id%22%3A373%2C%22name%22%3A%22Pack%20Liner%22%2C%22color%22%3A%7B%22r%22%3A154%2C%22g%22%3A195%2C%22b%22%3A237%7D%2C%22percent%22%3A0.016992353440951572%7D%7D%2C%22id%22%3A306%2C%22name%22%3A%22Big%20%5C%22Three%5C%22%22%2C%22total%22%3A3336736.15%2C%22percent%22%3A0.49041666666666667%2C%22visiblePoints%22%3Afalse%7D%2C%221%22%3A%7B%22points%22%3A%7B%220%22%3A%7B%22value%22%3A113398%2C%22id%22%3A320%2C%22name%22%3A%22Water%20Bottles%20x%202%22%2C%22color%22%3A%7B%22r%22%3A206%2C%22g%22%3A24%2C%22b%22%3A55%7D%2C%22percent%22%3A0.2439024390243902%7D%2C%221%22%3A%7B%22value%22%3A42524.25%2C%22id%22%3A321%2C%22name%22%3A%22Dirty%20Water%20Container%22%2C%22color%22%3A%7B%22r%22%3A211%2C%22g%22%3A44%2C%22b%22%3A72%7D%2C%22percent%22%3A0.09146341463414633%7D%2C%222%22%3A%7B%22value%22%3A195611.55000000002%2C%22id%22%3A322%2C%22name%22%3A%22Bladder%22%2C%22color%22%3A%7B%22r%22%3A216%2C%22g%22%3A65%2C%22b%22%3A90%7D%2C%22percent%22%3A0.42073170731707316%7D%2C%223%22%3A%7B%22value%22%3A56699%2C%22id%22%3A323%2C%22name%22%3A%22Purification%22%2C%22color%22%3A%7B%22r%22%3A221%2C%22g%22%3A84%2C%22b%22%3A107%7D%2C%22percent%22%3A0.1219512195121951%7D%2C%224%22%3A%7B%22value%22%3A56699%2C%22id%22%3A324%2C%22name%22%3A%22Purification%20%28Backup%29%22%2C%22color%22%3A%7B%22r%22%3A226%2C%22g%22%3A106%2C%22b%22%3A126%7D%2C%22percent%22%3A0.1219512195121951%7D%7D%2C%22id%22%3A319%2C%22name%22%3A%22Hydration%22%2C%22total%22%3A464931.80000000005%2C%22percent%22%3A0.06833333333333334%2C%22visiblePoints%22%3Afalse%7D%2C%222%22%3A%7B%22points%22%3A%7B%220%22%3A%7B%22value%22%3A311844.5%2C%22id%22%3A326%2C%22name%22%3A%22Stove/Pot%22%2C%22color%22%3A%7B%22r%22%3A242%2C%22g%22%3A209%2C%22b%22%3A0%7D%2C%22percent%22%3A0.9482758620689655%7D%2C%221%22%3A%7B%22value%22%3A17009.7%2C%22id%22%3A327%2C%22name%22%3A%22Utensil%22%2C%22color%22%3A%7B%22r%22%3A244%2C%22g%22%3A215%2C%22b%22%3A24%7D%2C%22percent%22%3A0.05172413793103448%7D%7D%2C%22id%22%3A325%2C%22name%22%3A%22Kitchen%22%2C%22total%22%3A328854.2%2C%22percent%22%3A0.04833333333333333%2C%22visiblePoints%22%3Afalse%7D%2C%223%22%3A%7B%22points%22%3A%7B%220%22%3A%7B%22value%22%3A28349.5%2C%22id%22%3A329%2C%22name%22%3A%22Toothbrush%22%2C%22color%22%3A%7B%22r%22%3A121%2C%22g%22%3A178%2C%22b%22%3A23%7D%2C%22percent%22%3A0.08264462809917356%7D%2C%221%22%3A%7B%22value%22%3A28349.5%2C%22id%22%3A330%2C%22name%22%3A%22Toothpaste%22%2C%22color%22%3A%7B%22r%22%3A132%2C%22g%22%3A186%2C%22b%22%3A40%7D%2C%22percent%22%3A0.08264462809917356%7D%2C%222%22%3A%7B%22value%22%3A28349.5%2C%22id%22%3A331%2C%22name%22%3A%22Towel%22%2C%22color%22%3A%7B%22r%22%3A144%2C%22g%22%3A193%2C%22b%22%3A58%7D%2C%22percent%22%3A0.08264462809917356%7D%2C%223%22%3A%7B%22value%22%3A42524.25%2C%22id%22%3A332%2C%22name%22%3A%22Sanitizer%22%2C%22color%22%3A%7B%22r%22%3A156%2C%22g%22%3A201%2C%22b%22%3A78%7D%2C%22percent%22%3A0.12396694214876032%7D%2C%224%22%3A%7B%22value%22%3A42524.25%2C%22id%22%3A333%2C%22name%22%3A%22Sunscreen%22%2C%22color%22%3A%7B%22r%22%3A169%2C%22g%22%3A209%2C%22b%22%3A100%7D%2C%22percent%22%3A0.12396694214876032%7D%2C%225%22%3A%7B%22value%22%3A14174.75%2C%22id%22%3A334%2C%22name%22%3A%22Lip%20Balm%22%2C%22color%22%3A%7B%22r%22%3A182%2C%22g%22%3A216%2C%22b%22%3A123%7D%2C%22percent%22%3A0.04132231404958678%7D%2C%226%22%3A%7B%22value%22%3A70873.75%2C%22id%22%3A335%2C%22name%22%3A%22First%20Aid%20Kit%22%2C%22color%22%3A%7B%22r%22%3A195%2C%22g%22%3A224%2C%22b%22%3A145%7D%2C%22percent%22%3A0.2066115702479339%7D%2C%227%22%3A%7B%22value%22%3A87883.45%2C%22id%22%3A374%2C%22name%22%3A%22Trowel%22%2C%22color%22%3A%7B%22r%22%3A209%2C%22g%22%3A232%2C%22b%22%3A171%7D%2C%22percent%22%3A0.256198347107438%7D%7D%2C%22id%22%3A328%2C%22name%22%3A%22Toiletries%22%2C%22total%22%3A343028.95%2C%22percent%22%3A0.050416666666666665%2C%22visiblePoints%22%3Afalse%7D%2C%224%22%3A%7B%22points%22%3A%7B%220%22%3A%7B%22value%22%3A93553.34999999999%2C%22id%22%3A337%2C%22name%22%3A%22Headlamp%22%2C%22color%22%3A%7B%22r%22%3A130%2C%22g%22%3A33%2C%22b%22%3A198%7D%2C%22percent%22%3A0.14732142857142858%7D%2C%221%22%3A%7B%22value%22%3A11339.800000000001%2C%22id%22%3A377%2C%22name%22%3A%22Stickpic%22%2C%22color%22%3A%7B%22r%22%3A140%2C%22g%22%3A51%2C%22b%22%3A204%7D%2C%22percent%22%3A0.01785714285714286%7D%2C%222%22%3A%7B%22value%22%3A130407.7%2C%22id%22%3A339%2C%22name%22%3A%22Phone%22%2C%22color%22%3A%7B%22r%22%3A151%2C%22g%22%3A71%2C%22b%22%3A209%7D%2C%22percent%22%3A0.20535714285714288%7D%2C%223%22%3A%7B%22value%22%3A28349.5%2C%22id%22%3A340%2C%22name%22%3A%22Music%20Player%22%2C%22color%22%3A%7B%22r%22%3A164%2C%22g%22%3A91%2C%22b%22%3A216%7D%2C%22percent%22%3A0.04464285714285715%7D%2C%224%22%3A%7B%22value%22%3A229630.94999999998%2C%22id%22%3A341%2C%22name%22%3A%22Battery%22%2C%22color%22%3A%7B%22r%22%3A175%2C%22g%22%3A110%2C%22b%22%3A221%7D%2C%22percent%22%3A0.36160714285714285%7D%2C%225%22%3A%7B%22value%22%3A85048.5%2C%22id%22%3A342%2C%22name%22%3A%22Cords%22%2C%22color%22%3A%7B%22r%22%3A188%2C%22g%22%3A133%2C%22b%22%3A226%7D%2C%22percent%22%3A0.13392857142857145%7D%2C%226%22%3A%7B%22value%22%3A56699%2C%22id%22%3A343%2C%22name%22%3A%22Headphones%22%2C%22color%22%3A%7B%22r%22%3A200%2C%22g%22%3A155%2C%22b%22%3A232%7D%2C%22percent%22%3A0.0892857142857143%7D%2C%227%22%3A%7B%22value%22%3A0%2C%22id%22%3A380%2C%22name%22%3A%22Wall%20Charger%22%2C%22color%22%3A%7B%22r%22%3A212%2C%22g%22%3A177%2C%22b%22%3A237%7D%2C%22percent%22%3A0%7D%7D%2C%22id%22%3A336%2C%22name%22%3A%22Electronics%22%2C%22total%22%3A635028.7999999999%2C%22percent%22%3A0.09333333333333332%2C%22visiblePoints%22%3Afalse%7D%2C%225%22%3A%7B%22points%22%3A%7B%220%22%3A%7B%22value%22%3A28349.5%2C%22id%22%3A345%2C%22name%22%3A%22Backup%20Fire%22%2C%22color%22%3A%7B%22r%22%3A232%2C%22g%22%3A109%2C%22b%22%3A27%7D%2C%22percent%22%3A0.050505050505050504%7D%2C%221%22%3A%7B%22value%22%3A113398%2C%22id%22%3A346%2C%22name%22%3A%22Maps%22%2C%22color%22%3A%7B%22r%22%3A234%2C%22g%22%3A123%2C%22b%22%3A49%7D%2C%22percent%22%3A0.20202020202020202%7D%2C%222%22%3A%7B%22value%22%3A56699%2C%22id%22%3A347%2C%22name%22%3A%22Notebook%22%2C%22color%22%3A%7B%22r%22%3A237%2C%22g%22%3A137%2C%22b%22%3A71%7D%2C%22percent%22%3A0.10101010101010101%7D%2C%223%22%3A%7B%22value%22%3A28349.5%2C%22id%22%3A348%2C%22name%22%3A%22Pen%22%2C%22color%22%3A%7B%22r%22%3A239%2C%22g%22%3A150%2C%22b%22%3A91%7D%2C%22percent%22%3A0.050505050505050504%7D%2C%224%22%3A%7B%22value%22%3A28349.5%2C%22id%22%3A349%2C%22name%22%3A%22Cards/Cash%22%2C%22color%22%3A%7B%22r%22%3A242%2C%22g%22%3A165%2C%22b%22%3A113%7D%2C%22percent%22%3A0.050505050505050504%7D%2C%225%22%3A%7B%22value%22%3A39689.299999999996%2C%22id%22%3A350%2C%22name%22%3A%22Multitool%22%2C%22color%22%3A%7B%22r%22%3A244%2C%22g%22%3A180%2C%22b%22%3A137%7D%2C%22percent%22%3A0.0707070707070707%7D%2C%226%22%3A%7B%22value%22%3A36854.35%2C%22id%22%3A351%2C%22name%22%3A%22Bug%20Net%22%2C%22color%22%3A%7B%22r%22%3A244%2C%22g%22%3A193%2C%22b%22%3A159%7D%2C%22percent%22%3A0.06565656565656566%7D%2C%227%22%3A%7B%22value%22%3A0%2C%22id%22%3A375%2C%22name%22%3A%22Repair%20Tape%22%2C%22color%22%3A%7B%22r%22%3A247%2C%22g%22%3A208%2C%22b%22%3A183%7D%2C%22percent%22%3A0%7D%2C%228%22%3A%7B%22value%22%3A229630.94999999998%2C%22id%22%3A378%2C%22name%22%3A%22Umbrella%22%2C%22color%22%3A%7B%22r%22%3A249%2C%22g%22%3A222%2C%22b%22%3A204%7D%2C%22percent%22%3A0.40909090909090906%7D%7D%2C%22id%22%3A344%2C%22name%22%3A%22Misc%22%2C%22total%22%3A561320.1%2C%22percent%22%3A0.08249999999999999%2C%22visiblePoints%22%3Afalse%7D%2C%226%22%3A%7B%22points%22%3A%7B%220%22%3A%7B%22value%22%3A99223.25%2C%22id%22%3A353%2C%22name%22%3A%22Wind%20Shirt%22%2C%22color%22%3A%7B%22r%22%3A219%2C%22g%22%3A242%2C%22b%22%3A50%7D%2C%22percent%22%3A0.0875%7D%2C%221%22%3A%7B%22value%22%3A56699%2C%22id%22%3A354%2C%22name%22%3A%22Hiking%20Socks%22%2C%22color%22%3A%7B%22r%22%3A224%2C%22g%22%3A244%2C%22b%22%3A70%7D%2C%22percent%22%3A0.05%7D%2C%222%22%3A%7B%22value%22%3A90718.40000000001%2C%22id%22%3A355%2C%22name%22%3A%22Rain%20Skirt%22%2C%22color%22%3A%7B%22r%22%3A226%2C%22g%22%3A244%2C%22b%22%3A90%7D%2C%22percent%22%3A0.08%7D%2C%223%22%3A%7B%22value%22%3A70873.75%2C%22id%22%3A356%2C%22name%22%3A%22Underwear%22%2C%22color%22%3A%7B%22r%22%3A231%2C%22g%22%3A247%2C%22b%22%3A111%7D%2C%22percent%22%3A0.0625%7D%2C%224%22%3A%7B%22value%22%3A39689.299999999996%2C%22id%22%3A357%2C%22name%22%3A%22Gloves%22%2C%22color%22%3A%7B%22r%22%3A233%2C%22g%22%3A247%2C%22b%22%3A131%7D%2C%22percent%22%3A0.034999999999999996%7D%2C%225%22%3A%7B%22value%22%3A56699%2C%22id%22%3A358%2C%22name%22%3A%22Beanie%22%2C%22color%22%3A%7B%22r%22%3A238%2C%22g%22%3A249%2C%22b%22%3A152%7D%2C%22percent%22%3A0.05%7D%2C%226%22%3A%7B%22value%22%3A172931.94999999998%2C%22id%22%3A359%2C%22name%22%3A%22Down%20Jacket%22%2C%22color%22%3A%7B%22r%22%3A240%2C%22g%22%3A249%2C%22b%22%3A169%7D%2C%22percent%22%3A0.1525%7D%2C%227%22%3A%7B%22value%22%3A246640.65%2C%22id%22%3A362%2C%22name%22%3A%22Sleeping%20Top%22%2C%22color%22%3A%7B%22r%22%3A245%2C%22g%22%3A252%2C%22b%22%3A191%7D%2C%22percent%22%3A0.2175%7D%2C%228%22%3A%7B%22value%22%3A178601.85%2C%22id%22%3A363%2C%22name%22%3A%22Sleeping%20Bottom%22%2C%22color%22%3A%7B%22r%22%3A247%2C%22g%22%3A252%2C%22b%22%3A212%7D%2C%22percent%22%3A0.1575%7D%2C%229%22%3A%7B%22value%22%3A56699%2C%22id%22%3A364%2C%22name%22%3A%22Sleeping%20Socks%22%2C%22color%22%3A%7B%22r%22%3A252%2C%22g%22%3A255%2C%22b%22%3A234%7D%2C%22percent%22%3A0.05%7D%2C%2210%22%3A%7B%22value%22%3A65203.85%2C%22id%22%3A379%2C%22name%22%3A%22Compression%20Sack%22%2C%22color%22%3A%7B%22r%22%3A219%2C%22g%22%3A242%2C%22b%22%3A50%7D%2C%22percent%22%3A0.057499999999999996%7D%7D%2C%22id%22%3A352%2C%22name%22%3A%22Clothing%20%28Packed%29%22%2C%22total%22%3A1133980%2C%22percent%22%3A0.16666666666666666%2C%22visiblePoints%22%3Afalse%7D%2C%227%22%3A%7B%22points%22%3A%7B%220%22%3A%7B%22value%22%3A0%2C%22id%22%3A361%2C%22name%22%3A%22Shoes%22%2C%22color%22%3A%7B%22r%22%3A86%2C%22g%22%3A175%2C%22b%22%3A226%7D%2C%22percent%22%3Anull%7D%2C%221%22%3A%7B%22value%22%3A0%2C%22id%22%3A365%2C%22name%22%3A%22Shirt%22%2C%22color%22%3A%7B%22r%22%3A100%2C%22g%22%3A182%2C%22b%22%3A229%7D%2C%22percent%22%3Anull%7D%2C%222%22%3A%7B%22value%22%3A0%2C%22id%22%3A366%2C%22name%22%3A%22Shorts%22%2C%22color%22%3A%7B%22r%22%3A116%2C%22g%22%3A189%2C%22b%22%3A232%7D%2C%22percent%22%3Anull%7D%2C%223%22%3A%7B%22value%22%3A0%2C%22id%22%3A367%2C%22name%22%3A%22Socks%22%2C%22color%22%3A%7B%22r%22%3A133%2C%22g%22%3A197%2C%22b%22%3A234%7D%2C%22percent%22%3Anull%7D%2C%224%22%3A%7B%22value%22%3A0%2C%22id%22%3A368%2C%22name%22%3A%22Underwear%22%2C%22color%22%3A%7B%22r%22%3A149%2C%22g%22%3A204%2C%22b%22%3A237%7D%2C%22percent%22%3Anull%7D%2C%225%22%3A%7B%22value%22%3A0%2C%22id%22%3A369%2C%22name%22%3A%22Hat%22%2C%22color%22%3A%7B%22r%22%3A167%2C%22g%22%3A214%2C%22b%22%3A242%7D%2C%22percent%22%3Anull%7D%2C%226%22%3A%7B%22value%22%3A0%2C%22id%22%3A370%2C%22name%22%3A%22Sunglasses%22%2C%22color%22%3A%7B%22r%22%3A183%2C%22g%22%3A222%2C%22b%22%3A244%7D%2C%22percent%22%3Anull%7D%2C%227%22%3A%7B%22value%22%3A0%2C%22id%22%3A371%2C%22name%22%3A%22Gaiters%22%2C%22color%22%3A%7B%22r%22%3A200%2C%22g%22%3A230%2C%22b%22%3A247%7D%2C%22percent%22%3Anull%7D%2C%228%22%3A%7B%22value%22%3A0%2C%22id%22%3A372%2C%22name%22%3A%22Trekking%20Poles%22%2C%22color%22%3A%7B%22r%22%3A219%2C%22g%22%3A238%2C%22b%22%3A249%7D%2C%22percent%22%3Anull%7D%7D%2C%22id%22%3A360%2C%22name%22%3A%22Clothing%20%28Worn%29%22%2C%22total%22%3A0%2C%22percent%22%3A0%2C%22visiblePoints%22%3Afalse%7D%7D%2C%22total%22%3A6803880%7D";


    function init() {
        $list.append(unescape(renderedTemplate));
        $categories = $(".lpCategories", $list);
        $chartContainer = $(".lpChart", $list);
        if (chartData) {
            chartData = JSON.parse(unescape(chartData));
            addParents(chartData, false);
            chart = pies({processedData: chartData, container: $chartContainer, hoverCallback: chartHover});    
        }
        initEventHandlers();
    }

    function addParents(chartData, parent) {
        if (parent) chartData.parent = parent;
        for (var i in chartData.points) {
            addParents(chartData.points[i], chartData);
        }
    }

    function chartHover(chartItem) {
        $(".hover").removeClass("hover");
        if (chartItem && chartItem.id) {
            $("#total_"+chartItem.id).addClass("hover");
        }
    }

    function updateSubtotalsUnit(unit) {
        $(".lpDisplaySubtotal").each(function() {
            $(this).text(MgToWeight(parseFloat($(this).attr("mg")), unit));
            $(this).next().text(unit);
        });
    }

    function initEventHandlers() {
        $list.on("click", ".lpUnitSelect", function(evt) {
            evt.stopPropagation();
            $(this).toggleClass("lpOpen");
            var value = $(".lpUnit", this).val();
            $("ul", this).removeClass("oz lb g kg");
            $("ul", this).addClass(value);
        });

         $list.on("click", ".lpUnitSelect li", function() {
            var unit = $(this).text();
            $(".lpDisplay", $(this).parents(".lpUnitSelect")).text(unit)
            $(".lpUnit", $(this).parents(".lpUnitSelect")).val(unit);
            if ($(this).parents(".lpTotalUnit").length) {
                $(".lpTotalValue", $(this).parents(".lpTotal")).text(MgToWeight(parseFloat($(".lpMG", $item).val()), unit));
                updateSubtotalsUnit(unit);
            } else {
                var $item = $(this).parents(".lpItem");
                $(".lpWeight", $item).text(MgToWeight(parseFloat($(".lpMG", $item).val()), unit));
            }
        });

        $categories.on("click", ".lpItemImage", function() {
            var imageUrl = $(this).attr("href");
            
            var $modalImage = $("<img src='"+imageUrl+"' />");
            $("#lpImageDialog").empty().append($modalImage);
            $modalImage.load(function() {
                $("#lpImageDialog").show();
                $("#lpIodalOverlay").show();
                centerDialog();
            });
        });

        $(document).on("click", function() {
            $(".lpOpen").removeClass("lpOpen");
        });
    }

    init();
};

function centerDialog() {
    var $dialog = $(".lp_dialog:visible");
    $dialog.css("margin-top", ""+(-1*$dialog.outerHeight()/2)+"px");
}

$.when(
    $.getScript( "http://www.lighterpack.com/pies.js" ),
    $.getScript( "http://www.lighterpack.com/dataTypes.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){
    $(function() {
        listReport();
    });
});
