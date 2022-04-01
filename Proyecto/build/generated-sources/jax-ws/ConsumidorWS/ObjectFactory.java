
package ConsumidorWS;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the ConsumidorWS package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _MoureJugador_QNAME = new QName("http://REST/", "MoureJugador");
    private final static QName _MoureJugadorResponse_QNAME = new QName("http://REST/", "MoureJugadorResponse");
    private final static QName _AcabarJoc_QNAME = new QName("http://REST/", "acabarJoc");
    private final static QName _AcabarJocResponse_QNAME = new QName("http://REST/", "acabarJocResponse");
    private final static QName _ConsultarEstatPartida_QNAME = new QName("http://REST/", "consultarEstatPartida");
    private final static QName _ConsultarEstatPartidaResponse_QNAME = new QName("http://REST/", "consultarEstatPartidaResponse");
    private final static QName _IniciarJoc_QNAME = new QName("http://REST/", "iniciarJoc");
    private final static QName _IniciarJocResponse_QNAME = new QName("http://REST/", "iniciarJocResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: ConsumidorWS
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link MoureJugador }
     * 
     */
    public MoureJugador createMoureJugador() {
        return new MoureJugador();
    }

    /**
     * Create an instance of {@link MoureJugadorResponse }
     * 
     */
    public MoureJugadorResponse createMoureJugadorResponse() {
        return new MoureJugadorResponse();
    }

    /**
     * Create an instance of {@link AcabarJoc }
     * 
     */
    public AcabarJoc createAcabarJoc() {
        return new AcabarJoc();
    }

    /**
     * Create an instance of {@link AcabarJocResponse }
     * 
     */
    public AcabarJocResponse createAcabarJocResponse() {
        return new AcabarJocResponse();
    }

    /**
     * Create an instance of {@link ConsultarEstatPartida }
     * 
     */
    public ConsultarEstatPartida createConsultarEstatPartida() {
        return new ConsultarEstatPartida();
    }

    /**
     * Create an instance of {@link ConsultarEstatPartidaResponse }
     * 
     */
    public ConsultarEstatPartidaResponse createConsultarEstatPartidaResponse() {
        return new ConsultarEstatPartidaResponse();
    }

    /**
     * Create an instance of {@link IniciarJoc }
     * 
     */
    public IniciarJoc createIniciarJoc() {
        return new IniciarJoc();
    }

    /**
     * Create an instance of {@link IniciarJocResponse }
     * 
     */
    public IniciarJocResponse createIniciarJocResponse() {
        return new IniciarJocResponse();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link MoureJugador }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://REST/", name = "MoureJugador")
    public JAXBElement<MoureJugador> createMoureJugador(MoureJugador value) {
        return new JAXBElement<MoureJugador>(_MoureJugador_QNAME, MoureJugador.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link MoureJugadorResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://REST/", name = "MoureJugadorResponse")
    public JAXBElement<MoureJugadorResponse> createMoureJugadorResponse(MoureJugadorResponse value) {
        return new JAXBElement<MoureJugadorResponse>(_MoureJugadorResponse_QNAME, MoureJugadorResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AcabarJoc }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://REST/", name = "acabarJoc")
    public JAXBElement<AcabarJoc> createAcabarJoc(AcabarJoc value) {
        return new JAXBElement<AcabarJoc>(_AcabarJoc_QNAME, AcabarJoc.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AcabarJocResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://REST/", name = "acabarJocResponse")
    public JAXBElement<AcabarJocResponse> createAcabarJocResponse(AcabarJocResponse value) {
        return new JAXBElement<AcabarJocResponse>(_AcabarJocResponse_QNAME, AcabarJocResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConsultarEstatPartida }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://REST/", name = "consultarEstatPartida")
    public JAXBElement<ConsultarEstatPartida> createConsultarEstatPartida(ConsultarEstatPartida value) {
        return new JAXBElement<ConsultarEstatPartida>(_ConsultarEstatPartida_QNAME, ConsultarEstatPartida.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConsultarEstatPartidaResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://REST/", name = "consultarEstatPartidaResponse")
    public JAXBElement<ConsultarEstatPartidaResponse> createConsultarEstatPartidaResponse(ConsultarEstatPartidaResponse value) {
        return new JAXBElement<ConsultarEstatPartidaResponse>(_ConsultarEstatPartidaResponse_QNAME, ConsultarEstatPartidaResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link IniciarJoc }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://REST/", name = "iniciarJoc")
    public JAXBElement<IniciarJoc> createIniciarJoc(IniciarJoc value) {
        return new JAXBElement<IniciarJoc>(_IniciarJoc_QNAME, IniciarJoc.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link IniciarJocResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://REST/", name = "iniciarJocResponse")
    public JAXBElement<IniciarJocResponse> createIniciarJocResponse(IniciarJocResponse value) {
        return new JAXBElement<IniciarJocResponse>(_IniciarJocResponse_QNAME, IniciarJocResponse.class, null, value);
    }

}
