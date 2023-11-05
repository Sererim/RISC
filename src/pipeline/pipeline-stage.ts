export abstract class PipelineStage {
    abstract readyToSend()     : boolean;
    abstract readuyToReceive() : boolean;
    
    abstract compute()   : void;
    abstract latchNext() : void;
}
