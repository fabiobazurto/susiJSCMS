export default function() {
  this.namespace='api';
    this.get('/entries', (schema, request) => {
        let entries=[];
        console.log(request.queryParams);
        if(request.queryParams){
            entries = schema.entries.where(request.queryParams);
        }
        else{
            entries = schema.entries.all();
        }
        return entries;
    });


}
