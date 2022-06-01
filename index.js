


    var FCM = require('fcm-node');
    var serverKey = 'AAAAKJ1mz7s:APA91bHqXoQr0cVHFapT65CCKbOehNrLQEhxHodPXnwa6dS6RSc6TTVazKWKzhHFpCcBtVkPtOOD9o5jEcjl2CWqtGOcV5XjoznIp-DVLKhvJqcfzKcYTcrlvQxTKowy4j8dFN7GydHd';
    var fcm = new FCM(serverKey);

    var message = {
	to:'exUXJDKcS1Crm2LJIbuH7o:APA91bHpx6AN_1DlGvAqqVhD875U2xRwpNSO0dbGx3YtEwulTMbGaaVOhV4JRZsWy_AkylGzqmVykyokFhtJJb7P7ciVxpD_EdcKepk-kkPrq3HOckxS8dlseW3vcY194j1yGiJrOFov',
        notification: {
            title: 'Notifcacion desde Servidor NODEJS',
            body: '{"Hola node "}',
        },
        data: { //you can send only notification or only data(or include both)
            title: 'ok cdfsdsdfsd',
            body: '{"name" : "okg ooggle ogrlrl","product_id" : "123","final_price" : "0.00035"}'
        }

    };

    fcm.send(message, function(err, response) {
        if (err) {
            console.log("Something has gone wrong!"+err);
			console.log("Respponse:! "+response);
        } else {
            // showToast("Successfully sent with response");
            console.log("Successfully sent with response: ", response);
        }

    });
